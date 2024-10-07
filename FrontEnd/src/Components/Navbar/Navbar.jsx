import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/magnifying-glass-solid.svg';

function Navbar() {
  const [theme,setTheme] = useState("Grey");

  const [searchBar,setSearchBar] = useState('');

  const handleSearchBarChange = (e)=>{
    setSearchBar(e.target.value);
  }

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
            <li><Link to="/addProduct"><button>Add Product</button></Link></li>
            <li><button>Liked</button></li>
            <li><button>Cart</button></li>
            <div className={styles.searchBar}><input type='text' value={searchBar} onChange={handleSearchBarChange}/><img src={searchIcon}/></div>
            <li><button onClick={()=>changeTheme()}></button></li>
        </ul>
    </div>
  )
}

export default Navbar