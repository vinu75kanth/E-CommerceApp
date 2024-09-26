import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [theme,setTheme] = useState("Grey");

  function changeTheme(){
    if(theme === 'Grey'){
      setTheme('white');
    }
    else{
      setTheme('Grey');
    }
  }

  useEffect(()=>{
    document.body.style.background = theme;
  },[theme])
  
  return (
    <div className={styles.navbar}>
        <p id="title">Designed By VINU</p>
        <ul className={styles.ulItem}>
            <li><Link to="/"><button>Home</button></Link></li>
            <li><button>Add Product</button></li>
            <li><button>Contact Us</button></li>
            <li><button>Liked</button></li>
            <li><button>Cart</button></li>
            <li><button onClick={()=>changeTheme()}></button></li>
        </ul>
    </div>
  )
}

export default Navbar