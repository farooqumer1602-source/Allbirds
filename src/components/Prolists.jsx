import React from 'react'
import { Link } from 'react-router-dom';
const Prolists = ({item}) => {
  return (
    <div>
       <div>
         <div className=''>
     <div className='bg-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-2xl'>
        <Link to={`/item/${item.id}`}><div className='flex  justify-center  items-center'>
      <img  className='w-70 py-11' src={item.image[0]} alt="" />
        </div>
        </Link>
        <div className=' flex justify-between p-4'>
           <div className=''>
             <h1 className='font-semibold text-[16px] truncate w-72 font-serif'>{item.name}</h1>
            <p>{item.color}</p>
           </div>
           <div className='pt-5'>
            <p className='font-semibold'>${item.price}</p>
           </div>
        </div>
    </div>
   </div>
    </div>
    </div>
  )
}

export default Prolists
