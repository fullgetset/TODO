import React from "react";
import {initialState} from "../initialState/initial-state";


const NEW_ADD_POST = 'NEW-ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const DELETE_ITEM = 'DELETE-ITEM';


const todoReducer = (state = initialState.state,
                     action,
                     newElAdd = initialState.state.newElAdd) => {
  if (action === undefined) {
    return state
  } else {
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
}


export default todoReducer;