import { useState } from "react";
import "./App.css";

import Semaforo from "./components/Semaforo";

function App() {
  const [luz, setLuz] = useState("verde");

  const semaforoChangeHandler = (childLuz) => {
    setLuz(childLuz);
  };

  return (
    <div>
      <Semaforo luz={luz} onChange={semaforoChangeHandler} />
      <div>Aquí la luz del semáforo del hijo escrita en el padre: {luz}</div>
    </div>
  );
}

export default App;
