import React from "react";
import { Link } from "react-router-dom";

import Search from "../../../img/Search.png";
import User from "../../../img/User.png";
import ShoppingBag from "../../../img/Shopping-bag.png";

const CartWidget = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <img src={Search} alt="" />
        </a>
        <input type="text" />
      </li>
      <li>
        <Link to="/login">
          <img src={User} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img src={ShoppingBag} alt="" />
        </Link>
      </li>
    </ul>
  );
};

export default CartWidget;
