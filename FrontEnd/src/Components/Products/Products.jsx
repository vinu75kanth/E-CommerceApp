import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
import Product from '../Product/Product'
import axios from 'axios';

function Products() {

  const [data,setData] = useState([]);
  const [isError,SetIsError] = useState(false);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get("http://localhost:8080/api/product");
        setData(response.data);
      }
      catch(error)
      {
        console.error(error);
        SetIsError(true);
      }
    }
    fetchData();
  },[]);
  return (
    <div className={styles.ProductContainer}>
      {
        isError ? <><p className={styles.errorMsg}>Connection Refused!!!<br/>
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