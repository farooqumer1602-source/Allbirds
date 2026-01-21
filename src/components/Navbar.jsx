import React from 'react'
import logo from "../assets/logo.png"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link ,NavLink} from 'react-router-dom';
import Cart from '../pages/Cart';
import useCart from '../hooks/useCart';

const Navbar = () => {
  const {cart} = useCart();
  return (
    <div className='sticky  top-2 z-30'>
      <div className='grid grid-cols-[20%_35%_45%]  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:bg-red-700  md:bg-amber-600 sm:bg-green-600  bg-gray-700  rounded-2xl md:w-[90%]  lg:w-[80%] px-2 m-auto shadow-2xl md:px-5 sm:px-3 h-15 lg:px-10'>
          <div className=''>
           <NavLink to={"/"}> <img  className='w-25 h-11' src={logo} alt="" /></NavLink>
          </div>
          <div className='flex lg:justify-center md:justify-center sm:justify-center justify-end  items-center '>
            <ul className='flex text-[12px] gap-3.5 uppercase'>
              <NavLink to={"/Mens"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"} ><li className="hover:font-semibold hover:scale-105 transition-all duration-300">Men</li></NavLink>
             <NavLink to={"/Womens"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"}> <li className="hover:font-semibold hover:scale-105 transition-all duration-300">Women</li></NavLink>
            </ul>
          </div>
          <div className='flex items-center justify-end '>
            <ul className='flex lg:gap-3.5 md:gap-3.5 sm:gap-3.5 text-[13px] gap-x-2'>
              <NavLink to={"/"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"}><li className="hover:font-semibold hover:scale-105 transition-all duration-300">Home</li></NavLink>
              <li className='hidden lg:flex md:flex sm:flex'>About</li>
               <Link to={"/Cart"}> <li className='relative'><LocalMallIcon/>
               {
                cart.length > 0 && (

                  <span className='bg-red-600 w-4 h-4 flex justify-center items-center p-2.5 text-white text-[12px] -top-1  -right-2 rounded-full absolute '>{cart.length}</span>
                )
               }
               </li>
               </Link>
                <li className='justify-center items-center flex '>
                    <SignedOut>
        <SignInButton />               
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
                </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar
 