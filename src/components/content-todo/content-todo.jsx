import s from './content-todo.module.scss';
import TodoInpBut from "./todo-inp-but/todo-inp-but";
import TodoQuest from "./todo-quest/todo-quest";

function ContentTodo({state, dispatch, newElAdd}) {

  return (
    <div className={s.content}>
      <div>
        <TodoInpBut state={state} dispatch={dispatch} newElAdd={newElAdd}/>
        <TodoQuest state={state} dispatch={dispatch} newElAdd={newElAdd}/>
      </div>
    </div>
  );
}

export default ContentTodo;