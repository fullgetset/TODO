import s from "./todo-item.module.scss";

function TodoItem({message, dispatch, newElAdd, id}) {
  return (
    <li className={s.content}>
      {message}
      <button onClick={() => {
        dispatch({type: 'DELETE-ITEM', id: id})
      }} className={s.btn}>delete
      </button>
    </li>
  );
}

export default TodoItem;