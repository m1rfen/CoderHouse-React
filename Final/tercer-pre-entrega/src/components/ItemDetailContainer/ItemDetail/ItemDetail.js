import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <article>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title}/>
        <p>$U {product.price}</p>
      </article>
      <ItemCount stock={product.stock} initial={1} text="Add to Cart" />
    </div>
  );
};

export default ItemDetail;
