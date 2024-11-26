import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginSignUp() {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState(true);
  const navigate = useNavigate();

  function handleLoginChange(){
    setLogin(l => !l);
  }
  async function loginRegister(){
    if(login){
      try{
        const res = await axios.post('http://localhost:8080/api/login',{
          username:name,
          password:password
        },{
          withCredentials:true
        })
        window.alert('User Logged In Successfully');
        navigate('../');
      }
      catch(err){
        console.log(err); 
        window.alert(err.response.data);
      }
    }
    else{
      try{
        const res = await axios.post('http://localhost:8080/api/register',{
          username:name,
          password:password
        })
        window.alert('User Registered Successfully');
        navigate('../');
      }
      catch(err){
        console.log(err); 
        window.alert(err.response.data);
      }
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h1>{login? 'Login':'SignUp'}</h1>
            <br/>
            <div className={styles.namepd}>
              <label>Username</label>
              <input type="text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <br/>
            <div className={styles.namepd}>
              <label>Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
            </div>
            <br/>
            <div className={styles.loginBtnContainer}>
              <button className={styles.loginbtn} onClick={loginRegister}>{login? 'Login':'SignUp'}</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p>{login? 'Don\'t have an account':'Already have an account  '}</p>
          <br/>
          <button onClick={handleLoginChange}>{login? 'Sign Up Here':'Login Here'}</button>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp