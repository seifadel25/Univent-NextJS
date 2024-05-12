"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/images/clients/Samsung.png",
    "/images/clients/Elsweedy.png",
    "/images/clients/Travco.png",
    "/images/clients/Americana.png",
    "/images/clients/TBS.jpg",
  ];

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
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="">
      {images.map((img, index) => (
        <div
          key={index}
          className=""
        >
          <Image
            className=" dark:bg-white"
            src={img}
            width={200}
            height={150}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
