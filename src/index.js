import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import store from "./store/store";
import ContainerTodo from "./containers/container-todo";


const enterRender = ({todoReducer}) => {
  ReactDOM.render(
    <React.StrictMode>
      <ContainerTodo state={todoReducer} dispatch={store.dispatch.bind(store)} newElAdd={todoReducer.newElAdd}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


enterRender(store.getState());

// store.subscribe(enterRender);
store.subscribe(() => {
  let state = store.getState();
  enterRender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();