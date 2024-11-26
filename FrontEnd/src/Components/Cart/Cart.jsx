import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import CartLikeItems from '../CartLikeItems/CartLikeItems'
import axios from 'axios';

function Cart() {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/cart',{
          withCredentials:true
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setIsError(true);
        console.log('Error:', error);
      }
    }
    fetchData();
  }, [])
  return (
    <div className={styles.container}>
      {
        isError ? 
                 <p>Error happened</p>
                 :
                 data.map(d=>{
                  return <CartLikeItems key={d.id} {...d}/>
                 })
      }
    </div>
  )
}

export default Cart