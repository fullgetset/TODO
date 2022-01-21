import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const arr = [
  {message: 'React TODO Project', id: 1},
  {message: 'Hello!', id: 2},
  {message: 'I am props', id: 3},
];

ReactDOM.render(
  <React.StrictMode>
    <App arr={arr}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
