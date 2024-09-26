import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
import Product from '../Product/Product'
import axios from 'axios';

function Products() {

  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get("http://localhost:8080/api/products");
        console.log(response.data);
        setData(response.data);
      }
      catch(error)
      {
        console.warn(error);
      }
    }
    fetchData();
  },[]);
  return (
    <div className={styles.ProductContainer}>
      {data.map(d => 
        <Product key={d.id} {...d}/>
      )}
    </div>
  )
}

export default Products