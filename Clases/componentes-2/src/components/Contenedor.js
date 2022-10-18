const Contenedor = ({ activo, nombre, apellido, button, unaFunction }) => {
  unaFunction();
  return (
    <div>
      <p>Soy un contenedor</p>
      <p>Activo: {String(activo)}</p>
      <p>
        Nombre completo: {nombre} {apellido}
      </p>
      {button}
    </div>
  );
};

export default Contenedor;
