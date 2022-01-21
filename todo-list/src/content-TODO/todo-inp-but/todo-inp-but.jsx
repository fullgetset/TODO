import s from "./todo-inp-but.module.scss";
import TodoInp from "./todo-inp/todo-inp";
import TodoBut from "./todo-but/todo-but";

function TodoInpBut() {
  return (
    <div className={s.content}>
      <TodoInp/>
      <TodoBut/>
    </div>
  );
}

export default TodoInpBut;