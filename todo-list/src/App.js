import logo from './logo.svg';
import './App.css';
import Header from "./header/header";
import ContentTODO from "./content-TODO/content-TODO";

function App({arr}) {
  return (
    <div className="App">
      <header className={"header"}><Header/></header>
      <main><ContentTODO arr={arr}/></main>
    </div>
  );
}

export default App;
