import s from './content-todo.module.scss';


function ContentTodo({children}) {
  return (
    <main>
      <div className={s.content}>
        <div>
          {children}
        </div>
      </div>
    </main>
  );
}

export default ContentTodo;