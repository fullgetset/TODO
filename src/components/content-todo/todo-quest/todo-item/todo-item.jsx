import s from "./todo-item.module.scss";

const deleteItemCreator = (id) => {
  return {
    type: 'DELETE-ITEM',
    id: id,
  }
}

function TodoItem({message, dispatch, id}) {
  console.log(`message:${message} , id:${id}`)
  return (
    <li className={s.content}>
      {message}
      <button onClick={() => {
        dispatch(deleteItemCreator(id))
      }} className={s.btn}>delete
      </button>
    </li>
  );
}

export default TodoItem;