import React from 'react'
import styles from './CartLikeItems.module.css'

function CartLikeItems(props) {
    const {
        id = 0,
        name = 'Product Name',   
        description = 'Product Description',
        brand = 'Product Brand',
        price = 0,
        category = 'Product Category',
        releaseDate = 'Product Release Date',
        available = true,
        quantity = 1,
    } = props;
  return (
    
    <div className={styles.container}>
        <div className={styles.image}></div>
        <div>
            <p>{name}</p>
            <p>{brand}</p>
            {/* <p>{price}</p> */}
            <p>{description}</p>
        </div>
        <div>
            {price}
        </div>
    </div>
  )
}

export default CartLikeItems