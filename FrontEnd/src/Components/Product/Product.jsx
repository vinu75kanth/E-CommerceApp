import React, { useEffect } from 'react'
import styles from './Product.module.css'
import vite from '../../../public/vite.svg'

function Product(props) {
  console.log('inside product');
  console.log(props);
  const {
    id,
    name,
    description,
    brand,
    price,
    category,
    releaseDate,
    available,
    quantity
  } = props;
  return (
    <div className={styles.box}>
        <p>{name}</p>
        <p>{brand}</p>
        <br/>
        <hr/>
        <p>{description}</p>
        <p>{category}</p>
        <p>Rs {price}</p>
        <button>Add to cart</button>
        <button>Like</button>
    </div>
  )
}

export default Product