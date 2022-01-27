import s from "./todo-item.module.scss";


function TodoItem({message, onClick}) {
  return (
    <li className={s.content}>
      {message}
      <button onClick={onClick} className={s.btn}>delete
      </button>
    </li>
  );
}

export default TodoItem;