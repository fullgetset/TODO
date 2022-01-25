import s from "./todo-quest.module.scss"
import TodoItem from "./todo-item/todo-item";


function TodoQuest({state, dispatch}) {
  return (
    <ul className={s.content}>
      {state.messages.map(({message, id}) => {
        return <TodoItem message={message} key={id} id={id} dispatch={dispatch}/>
      })}
    </ul>
  );
}

export default TodoQuest;