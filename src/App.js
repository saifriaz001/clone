import React from "react";
import {BrowserRouter,Route ,Routes} from "react-router-dom";
import './App.css';
// eslint-disable-next-line no-unused-vars
import HomePage  from "./components/homePage";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route  exact path="/" element={<HomePage/>}/>
      <Route  exact path="/search" element={<SearchResults/>}/>
      <Route  exact path="/product/:id" element={<ProductPage/>}/>
      <Route exact path ="/checkout" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
