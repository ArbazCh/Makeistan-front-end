import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import mern1 from "../images/mern1.png";
import mern2 from "../images/mern2.png";
import mern3 from "../images/mern3.jpg";
// import Mainbutton from "./Mainbtn";
import './Style.css';

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      // onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className=" swiper-img1 ">
          <img src={mern1} alt={"slider main image 1"} className="swiper-images" />
        </div>
        <div className="slider-content">
          <h5>Lorem, ipsum dolor.</h5>
          <h1>Lorem ipsum dolor,<br /> sit amet consectetur adipisicing.</h1>
          <div className="swiper-link">
            {/* <Mainbutton /> */}
            <button className="main-button" >lorem</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img relative">
          <img
            src={mern2}
            className={"swiper-img2 swiper-images"}
            alt={"slider main image 2"}
          />
        </div>
        <div className="slider-content">
          <h5>Lorem, ipsum dolor.</h5>
          <h1>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing.</h1>
          <div className="swiper-link">
            {/* <Mainbutton /> */}
            <button className="main-button" >lorem</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img relative">
          <img
            src={mern3}
            className={"swiper-img3 swiper-images"}
            alt={"slider main image 3"}
          />
        </div>
        <div className="slider-content">
          <h5>Lorem, ipsum dolor.</h5>
          <h1>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing.</h1>
          <div className="swiper-link">
            {/* <Mainbutton /> */}
            <button className="main-button" >lorem</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img relative">
          <img
            src={mern1}
            className={"swiper-img1 swiper-images"}
            alt={"slider main image 4"}
          />
        </div>
        <div className="slider-content">
          <h5>Lorem, ipsum dolor.</h5>
          <h1>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing.</h1>
          <div className="swiper-link">
            {/* <Mainbutton /> */}
            <button className="main-button" >lorem</button>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
