import React, { useEffect, useState } from 'react'
import './Hero.css'
import axios from 'axios';
import Cookies from 'js-cookie';

function Hero() {

    const [dat,setDat] = useState();

    useEffect(() => {
        const url = 'http://localhost:8080/api/product';
        const da = {
            'username': 'vinu',
            'password': 'Tiger@07'
        }

        const fetchData = async () => {
            const response = await axios.post('http://localhost:8080/api/login', da);
            setDat(response.data);
            //console.log(response.data);
            Cookies.set('token', response.data, { expires: 7 },{httpOnly: true});
        }
        const fetchProduct = async () => {
            const response = await axios.get(url,{
                withCredentials: true,
            });
            console.log(response.data);
        }
        //fetchData();
        fetchProduct();
        const hacker = ()=>{
            //Cookies.get('token');
            console.log(Cookies.get('token'));
        }
        //hacker();
    }, [])

  return (
    <div>Hero</div>
  )
}

export default Hero