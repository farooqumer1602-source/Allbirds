import React from 'react'
import { useEffect } from 'react'
import Products from '../data/Products'
import Store from "../components/Prolists"
const Womens = () => {
   useEffect(() => {
      document.title = "allbirds - Womens";
    }, []);
   const list = Products.filter((item)=>(
        item.gender === "female"
    ))
  return (
    <div className='p-7'>
        <img className='rounded-3xl mb-4' src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_CollectionsHeader_NewArrivals_Women_Desktop.jpg?v=1767649995&width=2048" alt="" />
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

export default Womens



