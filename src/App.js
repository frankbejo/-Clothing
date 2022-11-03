import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerService from "./pages/CustomerService";
import Products from './pages/Products';
import SingleProduct from "./pages/SingelProduct";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SearchedPage from "./pages/SearchedPage";
import {store} from './store/store';
import {Provider} from 'react-redux';
import Shoppingbag from './pages/Shoppingbag';
import Admin from "./pages/Admin";
import Error from './pages/Error';

function App() {
  const [usedata, setusedata] = useState([]);
  const [haserror, sethaserror] = useState(false)

  const fetchData = async () => {
    try{
      const res = await fetch("http://localhost:5000/products")
      const data = await res.json()
      setusedata(data)
    }
    catch(e){
      sethaserror(true)
      setusedata([])
    }
  } 

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navbar usedata={usedata} haserro={haserror} fetchData={fetchData}/> }>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchedPage />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="about" element={<About />} />
          <Route path="myshoppingbag" element={<Shoppingbag/>} />
          <Route path="products/:categoryLabel/:shopby/:viewby" element={<Products usedata={usedata} haserror={haserror}/>} />
          <Route path="products/:categoryLabel/:shopby/:viewby/:itemid/:itemname" element={<SingleProduct usedata={usedata}/>} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;
