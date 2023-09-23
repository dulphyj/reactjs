import "./App.css";
import freeLogo from "./img/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/contador";
import { useState } from "react";

function App() {
  const [numClic, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="free-logo-contenedor">
        <img className="free-logo" src={freeLogo} alt="logo de free" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClic} />
        <Boton texto="Clic" esBotonClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
