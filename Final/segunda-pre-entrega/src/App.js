import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accesorios from "./routes/Accesorios/Accesorios";
import Calzado from "./routes/Calzado/Calzado";
import Disciplinas from "./routes/Disciplinas/Disciplinas";
import Especiales from "./routes/Especiales/Especiales";
import Indumentaria from "./routes/Indumentaria/Indumentaria";
import Marcas from "./routes/Marcas/Marcas";
import Niños from "./routes/Niños/Niños";
import Rebajas from "./routes/Rebajas/Rebajas";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/Accesorios" element={<Accesorios />} />
          <Route exact path="/Calzado" element={<Calzado />} />
          <Route exact path="/Disciplinas" element={<Disciplinas />} />
          <Route exact path="/Especiales" element={<Especiales />} />
          <Route exact path="/Indumentaria" element={<Indumentaria />} />
          <Route exact path="/Marcas" element={<Marcas />} />
          <Route exact path="/Niños" element={<Niños />} />
          <Route exact path="/Rebajas" element={<Rebajas />} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer
        greeting={"Bienvenido a LA CANCHA, aquí encontrarás todo para tu look!"}
      />
    </div>
  );
}

export default App;
