import './App.css';
import Header from "./components/header/header";
import ContentTODO from "./components/content-TODO/content-TODO";

function App({state, newElAdd, dispatch}) {
  return (
    <div className="App">
      <header className={"header"}><Header/></header>
      <main><ContentTODO state={state} dispatch={dispatch} newElAdd={newElAdd}/></main>
    </div>
  );
}

export default App;
