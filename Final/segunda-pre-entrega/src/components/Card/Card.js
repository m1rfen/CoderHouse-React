import "./Card.css"
import React from 'react'
import { Link } from 'react-router-dom';
import Button from "../Button/Button"

const Card = (props) => {
  return (
    <article>
      <div>
        <img src={props.img} alt={props.title}/>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <p>
          {props.offer ? <p>Offer!</p> : <></>}€ {props.price}
        </p>
      </div>
      <Link to={`/item/${props.id}`}>
        <Button>Add to Cart</Button>
      </Link>
    </article>
  );
}

export default Card