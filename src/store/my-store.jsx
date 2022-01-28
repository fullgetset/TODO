import React from "react";
import todoReducer from "./reducers/todo-reducer";

export const combineReducers = (obj) => {
  let test = {};
  for (let key in obj) {
    test[key] = obj[key]();
  }
  return test;
}


const createStore = (reducer) => {
  let _state = reducer;

  return {
    _state,
    _callSubscriber() {
    },


    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    },


    dispatch(action) {
      todoReducer(this._state.todoReducer.state, action)
      this._callSubscriber(this._state)
    }
  }
}

let reducers = combineReducers({
  todoReducer
});

export let store = createStore(reducers);

// export let store = {
//   _state: {
//     todoReducer: todoReducer(),
//   },
//   _callSubscriber() {
//   },
//
//
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//
//
//   dispatch(action) {
//     todoReducer(this._state.todoReducer.state, action)
//     this._callSubscriber(this._state)
//   }
// }
