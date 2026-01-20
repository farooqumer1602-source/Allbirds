import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const hero2 = [
    {
      id: 1,
      image:
        "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_01.jpg?v=1766438229&width=1024",
      btn1: "Shop men",
      btn2: "shop women",
    },
    {
      id: 2,
      image:
        "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_02.jpg?v=1766438230&width=1024",
      btn1: "Shop men",
      btn2: "shop women",
    },
    {
      id: 3,
      image:
        "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_03.jpg?v=1766438230&width=1024",
      btn1: "Shop men",
      btn2: "shop women",
    },
    {
      id: 4,
      image:
        "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_04.jpg?v=1766438229&width=1024",
      btn1: "Shop men",
      btn2: "shop women",
    },
  ];
  return (
    <div>
      <div className="relative">
        <img
          className=" h-160  rounded-4xl w-full"
          src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_Homepage_Hero_MensWomens_Desktop_16x9_Update_1_6.png?v=1767733583&width=2560"
          alt=""
        />
        <div className="gap-3 flex absolute right-20 bottom-18">
           <Link to={"/Mens"}> <button className="cursor-pointer bg-white uppercase px-6 border-none outline-none rounded-3xl p-2 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-500">
            shop men
          </button></Link>
          <Link to={"/Womens"}><button className="cursor-pointer bg-white uppercase px-3 border-none outline-none rounded-3xl p-2 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-500">
            shop women
          </button></Link> 
        </div>
      </div>

      <div className="grid  grid-cols-4 gap-3 pt-4 w-full">
        {hero2.map((item) => (
          <div className="relative group w-full h-full">
            <img
              className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
              src={item.image}
              alt=""
            />
            <div className="absolute flex flex-col gap-y-3 w-full h-full top-0 justify-center items-center font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <Link to={"/Mens"}> <button className="cursor-pointer bg-transparent border rounded-3xl p-1 px-5 hover:bg-white hover:text-black hover:border-none transition-all duration-300">
                {item.btn1}
              </button></Link>
             <Link to={"/Womens"}> <button className="cursor-pointer bg-transparent border rounded-3xl p-1 px-5  hover:bg-white hover:text-black hover:border-none transition-all duration-300">
                {item.btn2}
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
