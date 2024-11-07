import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
import Product from '../Product/Product'
import axios from 'axios';

function Products() {

  const [data,setData] = useState([]);
  const [isError,SetIsError] = useState(false);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW51IiwiaWF0IjoxNzMwOTYwMjg3LCJleHAiOjE3MzA5NjIwODd9.ilDhX8LWdZ759inw5_32HazOkBVkY4PqrrRoZ04BNbA";
      try{
        const response = await axios.get("http://localhost:8080/api/product", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
          }
        );
        setData(response.data);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    fetchData();
  },[]);
  return (
    <div className={styles.ProductContainer}>
      {
        isError ? <><p className={styles.errorMsg}>Connection Refused<br/>
                          Probably Due to Back End Not Started!!!</p> 
                  </>
          :
          data.map(d => {
            if(d.available)
              return <Product key={d.id} {...d}/>
          })
      }
    </div>
  )
}

export default Products