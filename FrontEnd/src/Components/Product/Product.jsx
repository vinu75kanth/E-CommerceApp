import React, { useEffect } from 'react'
import styles from './Product.module.css'
import {Link} from 'react-router-dom'

function Product(props) {
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
    <Link to={`/${id}`} className={styles.aTag}>
      <div className={styles.box}>
        <div className={styles.boxTop}>
          <p className={styles.name}>{name}</p>
          <p className={styles.brand}>{brand}</p>
          <br/>
          <p>{category}</p>
          <hr/>
          <br/>
          <p>{description}</p>
        </div>
        <div className={styles.boxDown}>
          <p>Rs {price}</p>
          <div>
            <button>Add to cart</button>
            <button>Like</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product