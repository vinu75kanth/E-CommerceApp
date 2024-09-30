import React, { useEffect, useState } from 'react'
import styles from './AddProduct.module.css'
import axios from 'axios';

function AddProduct(props) {
  const [updation,setUpdation] = useState(false);
  const[newData,SetNewData] = useState(
    {
      id : '',
      name : '',
      description : '',
      brand : '',
      price : '',
      category : '',
      releaseDate : '',
      available : false,
      quantity : ''
    });

    useEffect(() => {
      if (Object.keys(props).length > 0 && props.constructor === Object) {
        SetNewData(props);
        setUpdation(true);
      }
    }, [props]);

    const handleChange = (e)=>{
      const {name,value} = e.target;
      SetNewData({...newData,[name]:value});
    };

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

    const handleSubmit = (e)=>{
      e.preventDefault();

      if(updation){
        //to continue
      }
      else{
        axios.post("http://localhost:8080/api/product",newData)
          .then(()=>{
            window.alert('produt added successfully');
          })
          .catch(e=>{
            console.log('error : ',e);
            window.alert('error adding produt');
          });
      }
    }

    const handleCheckboxChange = (e)=>{
      SetNewData({
        ...newData,
        available : e.target.checked
      })
    };

  return (
    <div className={styles.formBox}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.individualDiv}>
            <div className={styles.fifty}>
              <label>Name</label>
              <input type='text' name='name' value={newData.name} onChange={handleChange}></input>
            </div>
            <div className={styles.fifty}>
              <label>Brand</label>
              <input type='text' name='brand' value={newData.brand} onChange={handleChange}></input>
            </div>
          </div>
          <div className={`${styles.individualDiv} ${styles.hundred}`}>
            <label>Description</label>
            <input type='text' name='description' value={newData.description} onChange={handleChange}></input>
          </div>
          <div className={styles.individualDiv}>
            <div className={styles.fifty}>
              <label>Price</label>
              <input type='number' name='price' value={newData.price} onChange={handleChange}></input>
            </div>
            <div className={`${styles.fifty} ${styles.down}`}>
              <label>Category</label>
              <select name='category' value={newData.category} onChange={handleChange}>
                <option>Select One</option>
                <option>Mobile</option>
                <option>Home Appliance</option>
              </select>
            </div>
          </div>
          <div className={styles.individualDiv}>
            <div className={styles.thirty}>
              <label>Stock Quantity</label>
              <input type='number' name='quantity' value={newData.quantity} onChange={handleChange}></input>
            </div>
            <div className={styles.thirty}>
              <label>Release Date</label>
              <input type='date' name='releaseDate' value={newData.releaseDate} onChange={handleChange}></input>
            </div>
            <div className={styles.thirty}>
              <label>Image</label>
              <input type='file' className={styles.file} accept="images/png, images/jpg" onChange={handleImageChange}></input>
            </div>
          </div>
          <div className={styles.margining}>
            <input type='checkbox' id={styles.checkox} checked={newData.available} onChange={handleCheckboxChange}></input>
            <label htmlFor={styles.checkox} style={{cursor:'pointer'}}>Product Available</label>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type='submit'>Submit</button> 
          </div>
        </form>
    </div>
  )
}

export default AddProduct