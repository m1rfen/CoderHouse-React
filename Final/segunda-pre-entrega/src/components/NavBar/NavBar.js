import CardWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <p>ENVÍOS GRATIS A TODO EL PAÍS</p>
      <h1>LA CANCHA</h1>
      <nav>
        <ul>
          <a href="#INDUMENTARIA">
            <li>INDUMENTARIA</li>
          </a>
          <a href="#CALZADO">
            <li>CALZADO</li>
          </a>
          <a href="#ACCESORIOS">
            <li>ACCESORIOS</li>
          </a>
          <a href="#MARCAS">
            <li>MARCAS</li>
          </a>
          <a href="#DISCIPLINAS">
            <li>DISCIPLINAS</li>
          </a>
          <a href="#ESPECIALES">
            <li>ESPECIALES</li>
          </a>
          <a href="#NIÑOS">
            <li>NIÑOS</li>
          </a>
          <a href="#REBAJAS">
            <li>REBAJAS</li>
          </a>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  );
};

export default NavBar;
