"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/images/Clients/Samsung.png",
    "/images/Clients/Elsweedy.png",
    "/images/Clients/Travco.png",
    "/images/Clients/Americana.png",
    "/images/Clients/TBS.png",
    "/images/Clients/Metro.png",
    "/images/Clients/EgyptAir.png",
    "/images/Clients/ArmedForces.png",
    "/images/Clients/Asfour.png",
    "/images/Clients/ArabContractors.png",
    "/images/Clients/Carrefour.png",
    "/images/Clients/Sodic.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 6, // Number of images shown at once
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    pauseOnHover: false,
    className: "gap-[4rem]",

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
        <div key={index} className="px-2 md:px-2 lg:mx-0">
          <Image
            className=" rounded-lg dark:bg-white"
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
