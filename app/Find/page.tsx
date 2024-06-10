import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div
        className="flex h-[40dvh] items-center justify-center text-3xl font-bold text-white  md:text-4xl lg:text-6xl"
        style={{
          backgroundImage: "url('./images/FindUs/H1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className=" rounded-xl bg-background-light/70 px-8 py-4 text-text-light dark:bg-[#262629]/70 dark:text-text-dark">
          Find Us
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-background-light px-8 py-20 dark:bg-[#40414f]/20">
        <div className="w-10/12 md:w-5/12">
          <h3 className="pb-4 text-center text-lg font-bold">Head Office</h3>
          <p className="">
            <span className="font-bold">Address: </span> 337 Elsudan st , Ahmed
            Orabi-ElMohandseen, Giza
          </p>
          <div className="text-start pt-2">
            <Link
              href="https://maps.app.goo.gl/FbWKNMXdj2yNVYUQA"
              className=" text-lg font-semibold text-blue-900  dark:text-sky-400"
            >
              Office Google Maps Location
            </Link>
          </div>
          <br />
          <h3 className="pb-4 pt-6 text-center text-lg font-bold">Factory </h3>
          <p className="">
            <span className="font-bold">Address: </span> Abo Rawash ,
            Industrial-Zone , Beside smart village, Giza
          </p>
          <div className="text-start pt-2">
            <Link
              href="https://maps.app.goo.gl/iJcC4sF2Tnt4hEELA?g_st=iw"
              className=" text-lg font-semibold text-blue-900 dark:text-sky-400"
            >
              Factory Google Maps Location
            </Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default page;
