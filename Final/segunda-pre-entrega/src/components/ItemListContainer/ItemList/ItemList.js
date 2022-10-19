import React from "react";
import Card from "../../Card/Card";

const ItemList = (props) => {
  return (
    <>
      {props.productsList.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            detail={product.detail}
            stock={product.stock}
            expired={product.expires}
          />
        );
      })}
    </>
  );
};

export default ItemList;
