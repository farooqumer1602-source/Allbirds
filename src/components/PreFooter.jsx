import React from 'react'
import { Link } from 'react-router-dom'

const PreFooter = () => {
  return (
    <div>
      <div className='grid grid-cols-2 mt-15 gap-2.5'>
        <div className='relative'>
            <img className=' rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_2xPromo-01_Desktop-Mobile_1x1_01.jpg?v=1766438989&width=1024" alt="" />
            <div className='absolute w-full h-full top-0  flex justify-center items-center flex-col gap-2.5 text-white'>
                <h1 className='text-4xl tracking-wide font-serif'>The Versity Collection</h1>
          <p className=' text-gray-200'>Old School Vibes. New School Comfort.</p>
          <Link to={"/Mens"}> <button className='cursor-pointer border-none outline-none bg-white text-black hover:bg-black hover:text-white transition-all duration-300 mt-2  p-1 px-3.5 rounded-4xl text-[13px] font-semibold'>SHOP MEN</button></Link>
            </div>
        </div>
        <div className='relative'>
            <img className='rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_NewArrivals_Site_2xPromo-02_Desktop-Mobile_1x1_3f50f020-b536-4aa6-90eb-f43520bf651b.jpg?v=1766438989&width=1024" alt="" />
            <div>
                 <div className='absolute w-full h-full top-0  flex justify-center items-center flex-col gap-2.5 text-white'>
                <h1 className='text-4xl tracking-wider font-serif'>New Arrivals</h1>
          <p className=' text-gray-200'>The Latest And Greatest</p>
        <Link to={"/Womens"}> <button className='cursor-pointer border-none outline-none bg-white text-black hover:bg-black hover:text-white transition-all duration-300 mt-2  p-1 px-3.5 rounded-4xl text-[13px] font-semibold'>SHOP WOMEN</button></Link> 
            </div>
            </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-2.5 mt-9'>
         <div className='bg-[#ffff] shadow-2xl  rounded-3xl p-7 pb-13 space-y-4'>
                <h3 className='uppercase text-gray-700 text-[13px] tracking-wider'>Wear All Day Comfort</h3>
                <p className='text-[14px] font-semibold'>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
         </div>
         <div className='bg-[#ffff] shadow-2xl  rounded-3xl p-7 pb-13 space-y-4'>
                    <h3 className='uppercase text-gray-700 text-[13px] tracking-wider'>Sustainability In Every Step</h3>
                    <p className='text-[14px] font-semibold'>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
         </div>
         <div className='bg-[#ffff] shadow-2xl  rounded-3xl p-7 pb-13 space-y-4'>
                <h3  className='uppercase text-gray-700 text-[13px] tracking-wider'>Materials From The Earth</h3>
                <p className='text-[14px] font-semibold'>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They’re soft, breathable, and better for the planet—win, win, win.</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PreFooter
