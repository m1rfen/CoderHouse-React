import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../data/products';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getOneProduct(id).then((data) => {
      setProduct(data);
    });
  }, [id]);
  
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer