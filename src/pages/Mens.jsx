import React from 'react'
import { useEffect } from 'react'
import Products from '../data/Products'
import Store from "../components/Prolists"
const Mens = () => {
  useEffect(() => {
    document.title = "allbirds - Mens";
  }, []);
   const list = Products.filter((item)=>(
        item.gender === "male"
    ))
  return (
    <div className='p-7'>
        <img className='rounded-3xl mb-4' src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_CollectionsHeader_NewArrivals_Men_Desktop-1.jpg?v=1767649994&width=2048" alt="" />
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
   {
    list.map((item)=>(
        <Store key={item.id} item={item}/>
    ))
   }
    </div>
    </div>
      
  )
}

export default Mens
