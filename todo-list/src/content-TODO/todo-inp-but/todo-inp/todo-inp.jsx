import s from './todo-inp.module.scss'

function TodoInp() {
  return (
    <input placeholder={'Введите задание!'} className={s.content__inp} type="text"/>
  );
}

export default TodoInp;