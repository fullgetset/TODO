import React from "react";
import s from './todo-inp.module.scss'


function TodoInp({text, newElAdd, onPostChangeInp}) {
  return (
    <input
      value={text}
      onChange={onPostChangeInp}
      ref={newElAdd}
      placeholder={'Введите задание!'}
      className={s.content__inp}
      type="text"
    />
  );
}

export default TodoInp;
