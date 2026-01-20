import React from 'react'
import Hero from '../components/Hero'
import Products from "../data/Products"
import Arrivals from '../components/Arrivals'
import PreFooter from '../components/PreFooter'
import Footer from '../components/Footer'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
        document.title = "allbirds";
      }, []);
  return (
    <div className='p-3.5'>
     <Hero/>
     <Arrivals/>
     <PreFooter/>
   
    </div>
  )
}

export default Home