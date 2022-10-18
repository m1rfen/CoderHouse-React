import "./App.css";
import Contenedor from "./components/Contenedor";
import Button from "./components/Button";
import Contador from "./components/Contador";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <Contenedor
        activo={true}
        nombre="Fermín"
        apellido="Martínez"
        button={<Button>Enviar</Button>}
        unaFunction={() => {
          alert("Hola");
        }}
      />
      <Contador />
      <Saludar name="Fermín" />
    </div>
  );
}

export default App;
