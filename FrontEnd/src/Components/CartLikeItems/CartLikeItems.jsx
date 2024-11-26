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
        <div className={styles.content}>
            <div className={styles.image}></div>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.brand}>{brand}</p>
                <br/>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
        <div>
            Rs. {price}
        </div>
    </div>
  )
}

export default CartLikeItems