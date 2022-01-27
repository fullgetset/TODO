import s from "./todo-quest.module.scss"


function TodoQuest({children}) {

  return (
    <ul className={s.content}>
      {children}
    </ul>
  );
}

export default TodoQuest;