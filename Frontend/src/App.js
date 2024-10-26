import React, {useState} from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Auth from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail'
import AddProduct from "./pages/AddProduct";

function App() {
  const [islogin, setislogin] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(false);


  function enablelogin(data){
    setislogin(data); //show the login form
  }
  function authorizedKaro(data){
    setisAuthorized(true);
  }


  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<NavBar onlogin ={enablelogin}  />}>
          <Route index element={<Home isAuthorized={isAuthorized} onlogin ={enablelogin} islogin={islogin} />} />
           <Route path="product/:name" element={<ProductDetail isAuthorized={isAuthorized}  />} />
          <Route path="Login" element={<Auth authorizedKaro= {authorizedKaro} />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
