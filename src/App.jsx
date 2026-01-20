import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import ScrollToTop from './Scrolltotop/ScrollToTop';
import Productdetail from './pages/Productdetail';
import Cart from './pages/Cart';

const App = () => {
  return (
    
      <>
      <Navbar/>
        <ScrollToTop/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Mens" element={<Mens />} />
         <Route path="/Womens" element={<Womens />} />
         <Route path="/Cart" element={<Cart />} />
          <Route path="/item/:id" element={<Productdetail />} />
       </Routes>
       <Footer/>
      </>
  
  )
}

export default App
