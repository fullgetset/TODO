import React from "react";


const NEW_ADD_POST = 'NEW-ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const DELETE_ITEM = 'DELETE-ITEM';


const todoReducer = (state, action, newElAdd) => {
  switch (action.type) {
    case NEW_ADD_POST:
      let object = {
        message: newElAdd.current.value, id: state.messages.length + 1,
      }
      state.newPostText = '';
      state.messages.push(object)
      break;
    case ON_POST_CHANGE:
      let text = newElAdd.current.value;
      state.newPostText = text;
      break;
    case DELETE_ITEM:
      state.messages.map(({id}) => {
        if (id === action.id) {
          state.messages = state.messages.filter(({id}) => {
            return id !== action.id
          })
        }
      })
      break;
  }
  return state;
}


export default todoReducer;