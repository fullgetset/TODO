import React from "react";
import todoReducer from "./todo-reducer";

export let store = {
  newElAdd: React.createRef(),
  _state: {
    messages: [
      {message: 'React TODO Project', id: 1},
      {message: 'Hello!', id: 2},
      {message: 'I am props', id: 3},
    ],
    newPostText: 'Hello to TODO!',
  },
  _callSubscriber() {
  },


  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    todoReducer(this._state, action, this.newElAdd)
    this._callSubscriber(this._state)
  }
}



