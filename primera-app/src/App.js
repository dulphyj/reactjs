import "./App.css";
import Testimonio from "./components/Testimonio.js";
import testimoniosData from "./data/TestimoniosData";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="titulo">
          <h1>
            Este es el titulo de los testimonios sobre el ejercicio y nuestra
            priemra prueba de desarrollo de webs
          </h1>
        </div>
        {testimoniosData.map((testimonio) => (
          <Testimonio
            key={testimonio.nombre}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
