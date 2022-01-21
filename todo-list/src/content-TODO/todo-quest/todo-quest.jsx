import s from "./todo-quest.module.scss"
import TodoItem from "./todo-item/todo-item";


function TodoQuest({arr}) {

  const todoEl = arr.map(({message, id}) => <TodoItem message={message} key={id}/>);

  return (
    <ul className={s.content}>
      {todoEl}
    </ul>
  );
}

export default TodoQuest;