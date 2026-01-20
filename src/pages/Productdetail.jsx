import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Products from '../data/Products';
import logo from "../assets/logo.png"
import AddIcon from '@mui/icons-material/Add';
import useCart from '../hooks/useCart';
const Productdetail = () => {
  const { id } = useParams();
const { addToCart,  } = useCart();
   
  const item = Products.find(p => p.id === parseInt(id));

  if (!item) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Go Back</Link>
      </div>
    );
  }
 const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(item.image[0]);
  const [selectedSize, setSelectedSize] = useState(7);
 
  return (
    <>
    <div className="w-[70%] mt-12 m-auto grid grid-cols-2">
      <div className=''>
      <img
        src={mainImg}
        alt={item.name}
        className="w-full max-w-md rounded-3xl"
        />
       
      <div className="flex gap-3 ">
        {item.image.map((img, index) => (
          <img
          key={index}
          
          src={img}
          onClick={() => setMainImg(img)}
          className="w-20 h-20 object-cover rounded-xl cursor-pointer border hover:scale-105 transition"
          alt=""
          />
        ))}
      </div>
        </div>
        <div className=' pt-16 '>
          <h1 className='py-4 text-3xl'>{item.name}</h1>
          <p>${item.price}</p>
          <p className='relative text-gray-500 py-3 w-31.25'>Brand: <img className='h-8 absolute top-1 right-0' src={logo} alt="" /> </p>
          <div className='mt-5'>
            <p className='text-gray-500 '>Sizes:</p>
             {item.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`border px-3 py-1 gap-2 cursor-pointer transition ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {size}
          </button>
        ))}
          </div>
          <div className='py-9 gap-3.5 flex'> <span className='text-gray-500 '>Quantity:</span> 
          <div className='flex border border-[#434343]'>
            <button className=' bg-gray-300 cursor-pointer px-4' onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <p className='border-x px-4'>{quantity}</p>
          <button className='bg-gray-300 cursor-pointer px-4' onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>
          <div className=''>
            <button  className='hover:text-black cursor-pointer hover:bg-white transition-all duration-200 hover:border bg-black text-white p-2.5 w-[40%] ' onClick={() => addToCart({ ...item, selectedSize, quantity })}>Add To Cart<span><AddIcon/></span></button>
          </div>
        </div>
    </div>
    <div className='shadow-2xl p-15 w-[70%] m-auto mt-5 rounded-3xl h-59'>
        <div className='space-y-3.5'>
          <h1 className='text-2xl'>Material</h1>
          <p>{item.material}</p>
        </div>
    </div>
    </>
  );
};

export default Productdetail;
