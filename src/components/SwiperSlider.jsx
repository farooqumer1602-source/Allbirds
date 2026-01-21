import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Products from "../data/Products";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const SwiperSlider = () => {

    const SlectedId = [27,6,24,5,29,28]
    const filter = Products.filter(item =>SlectedId.includes(item.id))
    return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        speed={2000}
        centeredSlides
        slidesPerView={1.7}
        spaceBetween={20}
        className="overflow-hidden"
      >
        {filter.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="transition-all duration-1000">
               <img 
                src={item.image}
                alt={item.name}
                className="w-full h-170 relative object-cover rounded-lg"
              />
              <div className="absolute text-center  w-full bottom-12">
                <h1 className=" text-2xl">{item.name}</h1>
                <p className="mt-2.5">{item.color} - ${item.price}</p>
                <Link to={"/Mens"}> <button className="cursor-pointer border bg-white text-black hover:bg-black hover:text-white transition-all duration-500 mt-2 border-gray-200 p-1 px-3.5 rounded-4xl text-[13px] font-semibold">Shop Men</button></Link>
                <Link to={"/Womens"}> <button className="ml-1 cursor-pointer border bg-white text-black hover:bg-black hover:text-white transition-all duration-500 mt-2 border-gray-200 p-1 px-3.5 rounded-4xl text-[13px] font-semibold">Shop Women</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperSlider;
