import React, { useContext, useEffect, useState } from 'react'
import styles from './UpdateProduct.module.css'
import AddProduct from '../AddProduct/AddProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Updateproduct() {
    const {id} = useParams();
    console.log(id);

    const [productData, setProductData] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            const fetchedData = await axios.get(`http://localhost:8080/api/product/${id}`)
            .catch(e=>{
                window.alert('error occured while fetching data');
            });
            setProductData(fetchedData.data);
        };
        fetchData();
    },[id]);
    console.log("update");
  return (
    <>
        {(Object.keys(productData).length === 0)? <></> : <AddProduct {...productData}/>}
    </>
  )
}

export default Updateproduct