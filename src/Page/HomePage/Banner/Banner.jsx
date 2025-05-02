import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FFt from "../../../assets/fft.webp";
import FFd from "../../../assets/ffd.webp";
import "swiper/css";
import "swiper/css/navigation";

const sliderData = [
  {
    "id": 1,
    "gameImage": FFt,
    "model": "Free Fire Tournament",
    "price": 29.99,
    "rating": 4.5
  },
  {
    "id": 2,
    "gameImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "model": "Rewards",
    "price": 49.99,
    "rating": 4.2
  },
  {
    "id": 3,
    "gameImage": FFd,
    "model": "Diamond Topup",
    "price": 19.99,
    "rating": 4.8
  }
]

const Banner = () => {
  const [sliders, setSliders] = useState([]);
  const [responsiveWith, setResponsiveWith] = useState(window.innerWidth);
  useEffect(() => {
    fetch("bannerslider.json")
      .then((response) => response.json())
      .then((result) => {
        setSliders(result);
      });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setResponsiveWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative mb-60">
      <div className="relative banner-img h-screen w-full text-white flex justify-center items-center">
        <div className="absolute md:w-10/12 w-11/12 bg-gray-900/50 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-5xl font-bold text-yellow-400 ">TEB ESPORTS</h1>
          <p className="text-3xl my-7 w-full  md:w-1/2 md:leading-normal text-center">
            "No more unemployment.
            Earn 30,000 Taka per month
            just by playing tournaments"


          </p>

          <a href="/TEB_ESPORTS_1.0.3.apk" download={true} className="mx-2 bg-[#d31c3e] font-semibold duration-300 rounded rounded-ss-xl  rounded-ee-xl hover:bg-white px-7 py-3 text-white hover:text-black">
            Download App
          </a>
          <div className="mx-2 font-bold mt-5 w-max bg-white  duration-300 rounded rounded-ss-xl  rounded-ee-xl  px-7 py-3 text-black">
            2k+ Downloads
          </div>
        </div>
      </div>
      <div className="text-white md:w-10/12 w-full absolute md:bottom-[-20%] bottom-[-10%] md:start-[90px]">
        <Swiper
          slidesPerView={responsiveWith >= 576 ? 3 : 1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
        >
          {sliderData.map((game) => (
            <SwiperSlide className="px-2 text-white group" key={game?.id}>
              <img
                className="w-full rounded-md h-52"
                src={game?.gameImage}
                alt=""
              />
              <p className="hidden group-hover:block absolute bottom-0 text-lg font-semibold">
                {game?.model}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
