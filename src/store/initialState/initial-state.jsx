import React from "react";

export const initialState = {
  state: {
    messages: [{message: 'React TODO Project', id: 1}, {message: 'Hello!', id: 2}, {message: 'I am props', id: 3},],
    newPostText: 'Hello to TODO!!!!!!!!',
    newElAdd: React.createRef(),
  },
};
