import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { BentoGridDemo } from "./components/BentoGrid";
import { CanvasRevealEffectDemo } from "./components/CanvasReveal.";
import ImageSlider from "./components/ImageSlider";
import Link from "next/link";

export default function HomePage() {
  //dark:bg-[#afb1bf]/5
  return (
    <div>
      <div className="">
        <HeroHighlight className="-mt-4 rounded-3xl bg-gray-300/50 p-4 text-center text-4xl leading-loose text-text-light dark:bg-[#262629]/40 dark:text-text-dark  md:text-5xl lg:text-6xl ">
          <span className="text-7xl font-bold">Univent</span>
          <br /> Quality Is Everything.
          <Highlight className="leading-loose">Quality you can Trust</Highlight>
        </HeroHighlight>
      </div>

      <div className=" border-gray-900 bg-background-light px-4 pb-20 text-text-light dark:border-white dark:bg-[#40414f]/40 dark:text-text-dark">
        <h2 className=" border-gray-200 pt-32 text-center text-5xl font-bold dark:border-white">
          About Us
        </h2>
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-28">
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Vision.jpg')" }}
          >
            <h3 className="h-fit rounded  bg-white bg-opacity-75 p-3 dark:bg-slate-800 dark:bg-opacity-75">
              Our Vision
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="px-20 text-2xl">
              Univent is dedicated to elevating Egyptian products to the
              pinnacle of quality and craftsmanship. We aim to make &quot;Made
              in Egypt&quot; synonymous with excellence, recognized and trusted
              globally.
            </p>
          </div>
        </div>
        {/* For Large screens */}
        <div className=" hidden flex-col items-center justify-between gap-10 py-10 md:flex md:flex-row md:py-28">
          <div className="px-20 text-2xl md:w-1/2">
            <p>
              Since 1979, Univent has been a leader in the ventilation fan
              industry, continuously innovating with the latest engineering
              techniques and international standards to deliver top-notch
              ventilation solutions for residential, healthcare, and industrial
              applications.
            </p>
          </div>
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          >
            <h3 className="h-fit rounded  bg-white bg-opacity-75 p-3 dark:bg-slate-800 dark:bg-opacity-75">
              Our Mission
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:hidden md:flex-row md:py-28">
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          >
            <h3 className="h-fit rounded  bg-white bg-opacity-75 p-3 dark:bg-slate-800 dark:bg-opacity-75">
              Our Mission
            </h3>
          </div>
          <div className="px-20 text-2xl md:w-1/2">
            <p>
              Since our founding in 1979, Univent has grown to become a leader
              in the ventilation fan industry. We continually strive to innovate
              and improve, utilizing the latest engineering techniques and
              adhering to international standards. Our mission is to deliver
              cutting-edge ventilation solutions for a wide range of
              applications, including residential, healthcare, and industrial
              sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className=" border-gray-200 bg-white px-4 pb-20 text-text-light dark:border-white dark:bg-[#40414f]/20 dark:text-text-dark">
        <h2 className=" border-black/20 pt-16 pb-8 text-center  text-5xl font-bold dark:border-white ">
          Our Projects
        </h2>
        <p className="text-center text-3xl font-extralight pb-8">
          We have great honor to supply Ventilation Fans for many great projects
        </p>
        <div className="pt-8">
          <BentoGridDemo />
        </div>
      </div>
      {/* Clients */}
      <div className=" bg-white pb-36 pt-16  text-text-light dark:bg-[#40414f]/40 dark:text-text-dark">
        <h2 className="border-black py-16 text-center text-5xl  font-bold dark:border-white">
          Our Clients
        </h2>
        <div>
          <ImageSlider />
        </div>
      </div>
      {/* Certificates */}
      <div className="bg-gray-200 py-16 text-text-light dark:bg-[#40414f]/20 dark:text-text-dark">
        <h2 className="border-black py-16 text-center text-5xl  font-bold dark:border-white">
          Certificates
        </h2>
        <div className="mx-8 grid grid-cols-4 gap-4 md:grid-cols-10">
          <Link
            href="/Certificates#AJTC"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              AJTC Certificates
            </div>
            <div
              className="absolute inset-0  flex items-center justify-center bg-white opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/AJTC.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#MCL"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              Measurements and Calibration Labs
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/MLC.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#NO"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              National Organization For Potable Water & Sanitary Drainage
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/NO.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#UDEM"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              Udem System and Product Certification
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/UDEM.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#EOS"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              Egyptian Organization for Standardization
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/EOS.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#ISO"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50 dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              ISO 9001 -2018 Certification
            </div>
            <div
              className="absolute inset-0  flex items-center justify-center bg-white opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/ISO.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <Link
            href="/Certificates#RUCK"
            className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white text-center font-medium shadow-lg  shadow-black/50  dark:bg-background-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
