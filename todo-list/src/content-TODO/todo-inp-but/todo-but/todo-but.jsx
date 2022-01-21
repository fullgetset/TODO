import s from "./todo-but.module.scss"

function TodoBut() {
  return (
    <button className={s.todoBut}>
      <span className={s.todoBut__text}>Потвредить</span>
    </button>
  );
}

export default TodoBut;
