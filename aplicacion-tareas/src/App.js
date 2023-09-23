import "./App.css";
import freeLogo from "./img/freecodecamp-logo.png";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="free-logo-container">
        <img alt="" src={freeLogo} className="free-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
