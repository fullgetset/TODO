import './App.css';
import Header from "./components/header/header";
import ContentTodo from "./components/content-todo/content-todo";


function App({state, newElAdd, dispatch}) {
  return (
    <div className="App">
      <header className={"header"}><Header/></header>
      <main><ContentTodo state={state} dispatch={dispatch} newElAdd={newElAdd}/></main>
    </div>
  );
}

export default App;
