import './App.css';
import React from "react";
import Main from './views/Main';
// import { Product } from '../../server/models/product.model';
import ProductForm from './components/ProductForm';
import { Link, Routes, Route } from "react-router-dom";
import Detail from './views/Detail';
import Update from './views/Update';
import { useState } from 'react';



const App = (props) => {

  const [allProducts, setAllProducts] = useState([])
  // const [loaded, setLoaded] = useState(false)


return (
  <div className="App">
    <p>This is all products {JSON.stringify(allProducts)}</p>
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/products/:id"} element={<Detail />} />
      <Route path={"/products/:id/edit"} element={<Update />} /> 
    </Routes>
  </div>
);
}

export default App;
