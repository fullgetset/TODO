import s from './todo-inp.module.scss'
import React from "react";
import {postChangeCreator} from "../../../../redux/todo-reducer";


function TodoInp({state, newElAdd, dispatch}) {
  return (
    <input value={state.newPostText} onChange={() => {
      dispatch(postChangeCreator())
    }} ref={newElAdd} placeholder={'Введите задание!'}
           className={s.content__inp}
           type="text"/>
  );
}

export default TodoInp;


