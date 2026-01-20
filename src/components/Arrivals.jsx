import React from 'react'
import { Link } from 'react-router-dom'


const Arrivals = () => {
  return (
    <>
    <div className='relative overflow-hidden w-full h-150  mt-3.5'>
        <h1 className='w-full flex justify-center items-center mt-20 uppercase font-serif'><span className='border-b-2'>new arrivals</span></h1>
      <img className='size-170 absolute -left-95' src="https://www.allbirds.com/cdn/shop/files/A12270_26Q1_Mens-Varsity-Parchment-Blizzard-Sole_PDP_LEFT.png?v=1765307399&width=1024" alt="" />
      <img className='size-170 absolute right-100' src="https://www.allbirds.com/cdn/shop/files/A12456_26Q1_Golf-Dasher-Blizzard-Burnt-Olive-Medium-Gm_PDP_LEFT.png?v=1765238019&width=1280" alt="" />
      <img className='size-170 absolute -right-95' src="https://www.allbirds.com/cdn/shop/files/A12335_26Q1_Cruiser-Verdant-Green-Blizzard-Sole_PDP_LEFT_129905ba-94b9-4762-bfd9-68d58131ed07.png?v=1765237313&width=1280" alt="" />
    </div>
    <div className='w-full h-80   bg-linear-to-r from-black via-red-800 to-black rounded-3xl mt-25'>
      <div className='text-white flex flex-col gap-3.5 justify-center items-center h-80'>
          <h1 className='text-4xl tracking-wide font-serif'>The Versity Collection</h1>
          <p className=' text-gray-200'>Old School Vibes. New School Comfort.</p>
          <Link to={"/Mens"}><button className='cursor-pointer border hover:bg-white hover:text-black transition-all duration-500 mt-2 border-gray-200 p-1 px-3.5 rounded-4xl text-[13px] font-semibold'>SHOP MEN</button></Link>
      </div>
    </div>
    </>
  )
}

export default Arrivals
