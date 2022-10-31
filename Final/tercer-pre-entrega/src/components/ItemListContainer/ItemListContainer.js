import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;



  return (
    <div className="container">
      <h1>Products</h1>
      <ItemList productsList={productsList} />
      <hr />
    </div>
  );
};

export default ItemListContainer;
