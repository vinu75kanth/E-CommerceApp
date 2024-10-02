import React, { useEffect, useState } from 'react'
import styles from './ViewProduct.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewProduct() {
    const {a} = useParams();
    const [fetchedData,SetData] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            const fetched = await axios.get(`http://localhost:8080/api/product/${a}`);
            SetData(fetched.data);
        };
        fetchData();
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}></div>
        <div className={styles.textContainer}>
            <div className={styles.top}>
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
                    <br/>
                    <p>Stock Available : {fetchedData.quantity}</p>
                    <br/>
                    <div>
                        <button className={styles.btn}>Add to cart</button>
                        <button className={styles.btn}>Like</button>
                    </div>
                </div>
            </div>
            <div className={styles.down}>
                <Link to={`/update/${a}`}><button className={styles.Ubtn}>Update</button></Link>
                <button className={styles.Ubtn}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct