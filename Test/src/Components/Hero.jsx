import React, { useEffect, useState } from 'react'
import './Hero.css'
import axios from 'axios';
import Cookies from 'js-cookie';

function Hero() {

    const [response, setResponse] = useState(null);
    const [name,setName] = useState(null);
    const [passwd,setPasswd] = useState(null);

    function handleLogin(){
        const login = async () => {
            try{
                const res = await axios.post('http://localhost:8080/api/login',{
                    username: name,
                    password: passwd
                });
                console.log(res);
            }
            catch(e){
                if(e.status === 403){
                    window.alert("Invalid username or password");
                }
                else{
                    window.alert("Server error");
                }
            }
        }
        login();
    }


  return (
    <div>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <br/><br/>

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" onChange={(e) => setPasswd(e.target.value)} />
        <br/><br/>

        <button onClick={()=>handleLogin()}>Login</button>
    </div>
  )
}

export default Hero