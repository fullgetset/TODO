import React from "react";

const NEW_ADD_POST = 'NEW-ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const DELETE_ITEM = 'DELETE-ITEM';

let initialState = {
  newElAdd: React.createRef(),
  state: {
    messages: [{message: 'React TODO Project', id: 1}, {message: 'Hello!', id: 2}, {message: 'I am props', id: 3},],
    newPostText: 'Hello to TODO!',
  },
};

const todoReducer = (state = initialState,
                     action,
                     newElAdd = initialState.newElAdd) => {
  switch (action.type) {
    case NEW_ADD_POST:
      let object = {
        message: newElAdd.current.value, id: state.state.messages.length + 1,
      }
      state.state.newPostText = '';
      state.state.messages.push(object)
      break;
    case ON_POST_CHANGE:
      let text = newElAdd.current.value;
      state.state.newPostText = text;
      break;
    case DELETE_ITEM:
      state.state.messages.map(({id}) => {
        if (id === action.id) {
          let arr = state.state.messages.filter(({id}) => {
            return id !== action.id
          })
          state.state.messages = arr;
        }
      })
      break;
  }
  return state;
}

export const addPostCreator = () => ({type: NEW_ADD_POST,});
export const postChangeCreator = () => ({type: ON_POST_CHANGE,});
export const deleteItemCreator = id => ({type: DELETE_ITEM, id: id,});

export default todoReducer;