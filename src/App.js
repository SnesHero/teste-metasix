import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App-azul">
        <img src={logo} />
      </div>

      <div>
        <button>HOME</button>
        <button>FAQ</button>
        <button>LOCAIS</button>
        <button>CATEGORIA</button>
      </div>

      <div>
        <h1>FAQ - Perguntas Frequentes</h1>
        <input></input>
      </div>
      
    </div>
  );
}

export default App;
