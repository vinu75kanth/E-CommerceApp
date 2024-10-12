import React, { useEffect, useState, useContext } from 'react'
import styles from './SearchProduct.module.css'
import axios from 'axios';
import {SearchBarContext,SearchTriggerContext} from '../../App'
import Product from '../Product/Product';

function SearchProduct({searchTrigger}) {

  const [data,setData] = useState([]);
  const [isError,SetIsError] = useState(false);
  const keyword = useContext(SearchBarContext);
  // const searchTrigger = useContext(SearchTriggerContext);

  useEffect(()=>{
    // console.log(searchTrigger+' ..');
    const fetchDataFunction = async ()=>{
      try{
        const fetchedData = await axios.get(`http://localhost:8080/api/searchproduct?keyword=${keyword}`);
        setData(fetchedData.data);
      }
      catch(e){
        console.error(e);
        SetIsError(true);
      }
    };
    fetchDataFunction();
  },[searchTrigger]);

  return(
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
  );
}

export default SearchProduct