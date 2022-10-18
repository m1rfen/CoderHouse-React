import { useState } from "react";

const Button = ({ children }) => {
  const [semaforo, setSemaforo] = useState(false);

  const clickHandler = () => {
    setSemaforo(!semaforo);
  };

  return (
    <div>
      <button onClick={clickHandler}>{children}</button>
      {String(semaforo)}
    </div>
  );
};

export default Button;
