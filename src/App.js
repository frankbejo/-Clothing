import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { CustomerService } from "./pages/CustomerService";
import {Products} from './pages/Products';
import { SingleProduct } from "./pages/SingelProduct";
import Navbar from "./components/Navbar";
import { SearchedPage } from "./pages/SearchedPage";

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
    }
  } 


  useEffect(() => {
    fetchData()
  }, [])

    
  
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar usedata={usedata}/>}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchedPage />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="products/:categoryLabel/:shopby/:viewby" element={<Products usedata={usedata} haserror={haserror}/>} />
          <Route path="products/:categoryLabel/:shopby/:viewby/:itemid/:itemname" element={<SingleProduct usedata={usedata}/>} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
