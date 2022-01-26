import s from "./todo-item.module.scss";
import {deleteItemCreator} from "../../../../redux/todo-reducer";


function TodoItem({message, dispatch, id}) {
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