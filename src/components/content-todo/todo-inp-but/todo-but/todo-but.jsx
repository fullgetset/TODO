import s from "./todo-but.module.scss"
import React from "react";


function TodoBut({onClick}) {
  return (
    <button onClick={onClick} className={s.todoBut}>
      <span className={s.todoBut__text}>Потвредить</span>
    </button>
  );
}

export default TodoBut;
