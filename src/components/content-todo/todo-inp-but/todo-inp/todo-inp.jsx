import s from './todo-inp.module.scss'
import React from "react";


function TodoInp({state, newElAdd, dispatch}) {

  return (
    <input value={state.newPostText} onChange={() => {
      dispatch({type: 'ON-POST-CHANGE'})
    }} ref={newElAdd} placeholder={'Введите задание!'}
           className={s.content__inp}
           type="text"/>
  );
}

export default TodoInp;


