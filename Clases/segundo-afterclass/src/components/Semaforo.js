const Semaforo = ({ luz, onChange }) => {
  const buttonClickHandler = () => {
    const color = luz === "verde" ? "rojo" : "verde";
    onChange(color);
  };

  return (
    <div>
      <div>Semaforo: {luz}</div>
      <button onClick={buttonClickHandler}>Toggle</button>
    </div>
  );
};

export default Semaforo;
