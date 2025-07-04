import React, { useState, createContext, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ViewProduct from './Components/ViewProduct/ViewProduct';
import AddProduct from './Components/AddProduct/AddProduct';
import Updateproduct from './Components/UpdateProduct/Updateproduct';
import SearchProduct from './Components/SearchProduct/SearchProduct';
import LoginSignUp from './Components/LoginPage/LoginPage';
import Cart from './Components/Cart/Cart';

export const SearchContext = createContext();
export const SearchBarContext = createContext();
export const SearchTriggerContext = createContext();

function App() {

  const [search,setSearch] = useState(false);
  const [searchBar,setSearchBar] = useState('');
  const [searchTrigger,setSearchTrigger] = useState(true);

  return (
    <SearchContext.Provider value={setSearch}>
      <SearchBarContext.Provider value={searchBar}>
        <SearchTriggerContext.Provider value={setSearchTrigger}>
          <Router>
            <Navbar setSearchBar={setSearchBar}/>
              <Routes>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
                <Route path='/' element={(search)?<SearchProduct searchTrigger={searchTrigger}/>:<Products/>}></Route>
                <Route path="/view/:a" element={<ViewProduct/>}></Route>
                <Route path="/addProduct" element={<AddProduct/>}></Route>
                <Route path="/update/:id" element={<Updateproduct/>}></Route>
                <Route path="/login" element={<LoginSignUp/>}></Route>
                <Route path="/liked" element={<h1>Liked</h1>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
              </Routes>
          </Router>
        </SearchTriggerContext.Provider>
      </SearchBarContext.Provider>
    </SearchContext.Provider>
    
  )
}

export default App