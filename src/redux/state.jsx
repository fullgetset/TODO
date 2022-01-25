import React from "react";

const NEW_ADD_POST = 'NEW-ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const DELETE_ITEM = 'DELETE-ITEM';

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
    switch (action.type) {
      case NEW_ADD_POST:
        let object = {
          message: this.newElAdd.current.value,
          id: this._state.messages.length + 1,
        }
        this._state.newPostText = '';
        this._state.messages.push(object)
        this._callSubscriber(this._state);
        break;

      case ON_POST_CHANGE :
        let text = this.newElAdd.current.value;
        this._state.newPostText = text;
        this._callSubscriber(this._state);
        break;

      case DELETE_ITEM:
        this._state.messages.map(({id}) => {
          if (id === action.id) {
            this._state.messages.splice(id - 1, 1)
          }
        })
        this._callSubscriber(this._state)
    }
  }
}

export const addPostCreator = () => ({type: NEW_ADD_POST,});
export const postChangeCreator = () => ({type: ON_POST_CHANGE,});
export const deleteItemCreator = id => ({type: DELETE_ITEM, id: id,});

