import './App.css';
 import React from 'react'
import Home from "./views/Home/Home";
import ProductList  from "./views/ProductList/ProductList";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const user = true
 
 const App = () => {
   return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route >
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path ="/product/:id">
          <Product/>
        </Route>
        <Route path ="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/>:<Login />}
        </Route>
        <Route path="/register">
        {user? <Redirect to="/"/>:<Register />}
        </Route>
        </Switch>
        </Router>
     
   )
 }
 
 export default App;
