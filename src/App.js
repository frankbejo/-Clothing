import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { CustomerService } from "./pages/CustomerService";
import {Products} from './pages/Products';
import { SingleProduct } from "./pages/SingelProduct";
import Navbar from "./components/Navbar";
// import axios from "axios";
import {products} from '../src/data';
import { SearchedPage } from "./pages/SearchedPage";

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
          <Route path="search" element={<SearchedPage />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="products/:categoryLabel/:shopby/:viewby" element={<Products usedata={usedata}/>} />
          <Route path="products/:categoryLabel/:shopby/:viewby/:itemid/:itemname" element={<SingleProduct usedata={products}/>} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
