import s from "./todo-but.module.scss"
import React from "react";
import {addPostCreator} from "../../../../redux/todo-reducer";


function TodoBut({dispatch}) {
  return (
    <button onClick={() => {
      dispatch(addPostCreator())
    }} className={s.todoBut}>
      <span className={s.todoBut__text}>Потвредить</span>
    </button>
  );
}

export default TodoBut;
