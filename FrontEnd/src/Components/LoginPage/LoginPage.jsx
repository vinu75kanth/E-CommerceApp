import React, { useState } from 'react'
import styles from './LoginPage.module.css'

function LoginSignUp() {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h1>Login</h1>
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
              <button className={styles.loginbtn}>Login</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p>Dont have an account</p>
          <button>Sign Up here</button>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp