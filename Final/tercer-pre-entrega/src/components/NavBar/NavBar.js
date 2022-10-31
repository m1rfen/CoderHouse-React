import Logo from "../../img/Logo.png";

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <img src={Logo} alt="" width="100px"/>
            </Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/category/running"}>Running</Link>
          </li>
          <li>
            <Link to={"/category/soccer"}>Soccer</Link>
          </li>
          <li>
            <Link to={"/category/training"}>Training</Link>
          </li>
          <li>
            <Link to={"/category/fashion"}>Fashion</Link>
          </li>
          <li>
            <Link to={"/category/tenis"}>Tenis</Link>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </header>
  );
};

export default NavBar;
