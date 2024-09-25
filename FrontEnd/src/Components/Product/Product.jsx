import React from 'react'
import styles from './Product.module.css'
import vite from '../../../public/vite.svg'

function Product() {
  return (
    <div className={styles.box}>
        <img src={vite} alt='this is a image'></img>
        <p>Title</p>
        <p>Category</p>
        <p>Rs 10,000</p>
        <button>Add to cart</button>
        <button>Like</button>
    </div>
  )
}

export default Product