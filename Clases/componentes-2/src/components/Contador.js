import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const clickHandler = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <button onClick={clickHandler}>Sumar</button>
      <p>{numero}</p>
    </div>
  );
};

export default Contador;
