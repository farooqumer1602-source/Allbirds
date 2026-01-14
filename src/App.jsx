import React from 'react'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
const App = () => {
  return (
     <>
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} /> */}
    </Routes>
    </>
  )
}

export default App
