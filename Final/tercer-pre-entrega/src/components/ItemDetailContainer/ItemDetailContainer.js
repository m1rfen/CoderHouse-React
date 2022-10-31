import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore;
    const queryDoc = doc(querydb, "products", "1CpmjSZnB9Y0wO6hZATW");
    getDoc(queryDoc)
      .then(res => console.log(res));
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
