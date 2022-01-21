import s from "./todo-item.module.scss";

function TodoItem({ message }) {
  return (
    <li className={s.content}>
      {message}
    </li>
  );
}

export default TodoItem;