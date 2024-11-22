import React, { useEffect, useState, useContext, createContext } from 'react'
import styles from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/magnifying-glass-solid.svg';
import {SearchContext, SearchBarContext, SearchTriggerContext} from '../../App'


function Navbar({setSearchBar}) {
  const [theme,setTheme] = useState("Grey");

  const searchBar = useContext(SearchBarContext);

  const navigate = useNavigate();

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
    navigate('/login');
  },[theme])

  const setSearch = useContext(SearchContext);
  const setSearchTrigger = useContext(SearchTriggerContext);

  const handleSearch = ()=>{
    setSearchTrigger(t => !t);
    setSearch(true);
  }

  const handleKeyDown = (e)=>{
    if(e.key === 'Enter'){
      handleSearch();
    }
  }
  
  return (
    <div className={styles.navbar}>
        <p id="title">Designed By VINU</p>
        <ul className={styles.ulItem}>
            <li><Link to="/"><button onClick={()=>{setSearch(false)}}>Home</button></Link></li>
            {/* <li><Link to="/addProduct"><button>Add Product</button></Link></li> */}
            <li><button>Liked</button></li>
            <li><button>Cart</button></li>
            <div className={styles.searchBar}>
              <input type='text' value={searchBar} onChange={handleSearchBarChange} onKeyDown={handleKeyDown}/>
              <img src={searchIcon} onClick={handleSearch}/>
            </div>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><button onClick={()=>changeTheme()}></button></li>
        </ul>
    </div>
  )
}

export default Navbar