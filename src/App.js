import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./components/Error";
import { Home } from "./components/Home";
import { CustomerService } from "./components/CustomerService";
import {Products} from './components/Products';
import { SingleProduct } from "./components/SingelProduct";
import Navbar from "./components/Navbar";
// import axios from "axios";
import SideFilter from "./components/SideFilter";
import {products} from '../src/data';

// const {REACT_APP_URL_KEY} = process.env.REACT_APP_URL_KEY;

function App() {
  const [usedata, setusedata] = useState(products);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/products")
  //   .then(res => {
  //     setusedata(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
    
  // }, [])

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="products/:categoryLabel/:shopby/:viewby" element={<SideFilter usedata={usedata} />}>
            <Route index element={<Products usedata={usedata}/>} />
          </Route>
          <Route path="products/:categoryLabel/:shopby/:viewby/:itemid/:itemname" element={<SingleProduct usedata={products}/>} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
