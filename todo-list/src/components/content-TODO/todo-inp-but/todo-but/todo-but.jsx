import s from "./todo-but.module.scss"
import React from "react";

function TodoBut({dispatch}) {


  return (
    <button onClick={() => {
      dispatch({type: 'NEW-ADD-POST'})
    }} className={s.todoBut}>
      <span className={s.todoBut__text}>Потвредить</span>
    </button>
  );
}

export default TodoBut;
