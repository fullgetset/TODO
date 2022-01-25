import s from './todo-inp.module.scss'
import React from "react";

const postChangeCreator = () => {
  return {
    type: 'ON-POST-CHANGE',
  }
}


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


