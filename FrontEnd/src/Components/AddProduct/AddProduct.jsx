import React, { useState } from 'react'
import styles from './AddProduct.module.css'

function AddProduct() {

  const[newData,SetNewData] = useState({});

  return (
    <div className={styles.formBox}>
        <form className={styles.form}>
          <div className={styles.individualDiv}>
            <div className={styles.fifty}>
              <label>Name</label>
              <input type='text'></input>
            </div>
            <div className={styles.fifty}>
              <label>Brand</label>
              <input type='text'></input>
            </div>
          </div>
          <div className={`${styles.individualDiv} ${styles.hundred}`}>
            <label>Description</label>
            <input type='text'></input>
          </div>
          <div className={styles.individualDiv}>
            <div className={styles.fifty}>
              <label>Price</label>
              <input type='number'></input>
            </div>
            <div className={`${styles.fifty} ${styles.down}`}>
              <label>Category</label>
              <select>
                <option>Select One</option>
                <option>Mobile</option>
                <option>Home Appliance</option>
              </select>
            </div>
          </div>
          <div className={styles.individualDiv}>
            <div className={styles.thirty}>
              <label>Stock Quantity</label>
              <input type='number'></input>
            </div>
            <div className={styles.thirty}>
              <label>Release Date</label>
              <input type='date'></input>
            </div>
            <div className={styles.thirty}>
              <label>Image</label>
              <input type='file' className={styles.file} accept="images/png"></input>
            </div>
          </div>
          <div className={styles.margining}>
            <input type='checkbox' id={styles.checkox}></input>
            <label for={styles.checkox} style={{cursor:'pointer'}}>Product Available</label>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn}>Submit</button> 
          </div>
        </form>
    </div>
  )
}

export default AddProduct