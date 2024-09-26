import React, { useEffect, useState } from 'react'
import styles from './ViewProduct.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewProduct() {
    const {a} = useParams();
    const [fetchedData,SetData] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            console.log("fetching");
            const fetched = await axios.get(`http://localhost:8080/api/product/${a}`);
            SetData(fetched.data);
        };
        fetchData();
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}></div>
        <div className={styles.textContainer}>
        <div className={styles.boxTop}>
          <p className={styles.name}>{fetchedData.name}</p>
          <p className={styles.brand}>{fetchedData.brand}</p>
          <br/>
          <p>{fetchedData.category}</p>
          <hr/>
          <br/>
          <p>{fetchedData.description}</p>
        </div>
        <div className={styles.boxDown}>
          <p>Rs {fetchedData.price}</p>
          <div>
            <button>Add to cart</button>
            <button>Like</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ViewProduct