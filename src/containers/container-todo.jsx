import Header from "../components/header/header";
import ContentTodo from "../components/content-todo/content-todo";
import TodoInpBut from "../components/content-todo/todo-inp-but/todo-inp-but";
import TodoQuest from "../components/content-todo/todo-quest/todo-quest";
import TodoBut from "../components/content-todo/todo-inp-but/todo-but/todo-but";
import TodoInp from "../components/content-todo/todo-inp-but/todo-inp/todo-inp";
import TodoItem from "../components/content-todo/todo-quest/todo-item/todo-item";
import {addPostCreator} from "../store/actions/addpostCreator";
import {postChangeCreator} from "../store/actions/postChangeCreator";
import {deleteItemCreator} from "../store/actions/deleteItemCreator";


const ContainerTodo = ({state, dispatch, newElAdd}) => {
  const {messages} = state;

  const handleClick = () => {
    dispatch(addPostCreator())
  }
  const onPostChangeInp = () => {
    dispatch(postChangeCreator())
  }
  const deleteClick = (id) => {
    return () => {
      dispatch(deleteItemCreator(id))
    }
  }

  return (
    <div className="App">
      <Header/>
      <ContentTodo>
        <TodoInpBut>
          <TodoInp text={state.newPostText} onPostChangeInp={onPostChangeInp} newElAdd={newElAdd}/>
          <TodoBut dispatch={dispatch} onClick={handleClick}/>
        </TodoInpBut>
        <TodoQuest>
          {messages.map(({message, id}) => {
            return < TodoItem message={message} key={id} onClick={deleteClick(id)}/>
          })}
        </TodoQuest>
      </ContentTodo>
    </div>
  )
}

export default ContainerTodo;