import logo from "./images/logo.png";
import "./App.css";
import Menu from "./Menu";
import FAQ from '../src/FAQ/FAQ';

function App() {
  return (
    <div>
      <div className="App-azul">
        <img className="App-logo" src={logo} />
      </div>

      <Menu/>

      <FAQ/>
      
    </div>
  );
}

export default App;
