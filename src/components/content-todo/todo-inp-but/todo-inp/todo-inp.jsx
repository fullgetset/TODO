import s from './todo-inp.module.scss'
import React from "react";
import {postChangeCreator} from "../../../../redux/todo-reducer";
import {connect} from "react-redux";
import TodoInpBut from "../todo-inp-but";
import store from "../../../../redux/redux-store";


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


