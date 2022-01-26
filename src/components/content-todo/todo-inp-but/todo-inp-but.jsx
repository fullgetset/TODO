import s from "./todo-inp-but.module.scss";
import TodoInp from "./todo-inp/todo-inp";
import TodoBut from "./todo-but/todo-but";
import React from "react";
import {connect} from "react-redux";
import superTodoInpBut from "./todo-inp/todo-inp";



function TodoInpBut({state, dispatch, newElAdd}) {

  return (
    <div className={s.content}>
      <TodoInp state={state} newElAdd={newElAdd} dispatch={dispatch}/>
      <TodoBut dispatch={dispatch}/>
    </div>
  );
}

export default TodoInpBut;