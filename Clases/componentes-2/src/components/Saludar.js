import { useEffect, useState } from "react";

const Saludar = ({ name }) => {
  const [count, setCount] = useState(0);
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    console.log("Me he montado!");
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  useEffect(() => {
    console.log("Ha cambiado el count");
  }, [count]);

  useEffect(() => {
    console.log("Me ejecuto siempre que algo cambie del componente");
  });

  const clickHandler = () => {
    setCount(count + 1);
  };

  const keyDownHandler = () => {
    setKeyCount(keyCount + 1);
  };

  // No es buena práctica
  // console.log("Hay un render");

  return (
    <div>
      <p>Hola {name}</p>
      <button onClick={clickHandler}>Click!</button>
      <p>Click count: {count}</p>
      <p>Key count: {keyCount}</p>
    </div>
  );
};

export default Saludar;
