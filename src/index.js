import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
// import {store} from "./redux/store";


const enterRender = ({todoReducer}) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={todoReducer.state} dispatch={store.dispatch.bind(store)} newElAdd={todoReducer.newElAdd}/>
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
