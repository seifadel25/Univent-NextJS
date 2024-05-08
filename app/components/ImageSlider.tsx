"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

interface ImageSliderProps {
  images: string[];
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5, // Number of images shown at once
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,centerMode:true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,centerMode:true
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="flex flex-row justify-center">
          <img
            className=" dark:bg-white"
            src={img}
            alt={`Slide ${index}`}
            style={{ width: "200px", height: "150px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
