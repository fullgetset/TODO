import s from './content-todo.module.scss';
import TodoInpBut from "./todo-inp-but/todo-inp-but";
import TodoQuest from "./todo-quest/todo-quest";

function ContentTODO({arr}) {
  return (
    <div className={s.content}>
      <div>
        <TodoInpBut/>
        <TodoQuest arr={arr}/>
      </div>
    </div>
  );
}

export default ContentTODO;