import logo from "./images/logo.png";
import "./App.css";
import Menu from "./Menu";
import FAQ from "../src/FAQ/FAQ";

function App() {
  return (
    <div>
      <div className="App-azul">
        <img className="App-logo" src={logo} />
        <div className="Top-buttons">
          <div className="Modulos-icon">
            <i class="fas fa-th"></i>
            Módulos
          </div>
          <div className="Modulos-icon">
            <i class="fas fa-sign-out-alt"></i>
            Log Out
          </div>
        </div>
      </div>

      <Menu />

      <FAQ />
    </div>
  );
}

export default App;
