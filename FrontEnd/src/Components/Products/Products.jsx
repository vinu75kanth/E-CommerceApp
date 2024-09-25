import React from 'react'
import styles from './Products.module.css'
import Product from '../Product/Product'

function Products() {
  return (
    <div className={styles.ProductContainer}>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default Products