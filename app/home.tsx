import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { BentoGridDemo } from "./components/BentoGrid";
import { CanvasRevealEffectDemo } from "./components/CanvasReveal.";
import ImageSlider from "./components/ImageSlider";

export default function HomePage() {
  return (
    <div>
      <div className="">
        <HeroHighlight className="text-4xl md:text-5xl lg:text-6xl text-center leading-loose text-text-light dark:text-text-dark bg-gray-300/30 dark:bg-gray-900/40  p-4 rounded-3xl ">
          <span className="text-7xl font-bold">Univent</span>
          <br /> Where Quality Is Everything.
          <Highlight className="leading-loose">Quality you can Trust</Highlight>
        </HeroHighlight>
      </div>
      <div className="px-4 bg-white dark:bg-slate-950 text-text-light dark:text-text-dark pb-20 border-t-4 border-gray-200 dark:border-white">
        <h2 className="text-center text-5xl py-28 font-bold border-b-2 border-gray-200 dark:border-white">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10 md:py-28">
          <div
            className="md:w-1/2 h-[400px] w-full flex justify-center items-center bg-cover bg-center text-5xl"
            style={{ backgroundImage: "url('/images/About/Vision.jpg')" }}
          >
            <h3 className="bg-white h-fit  dark:bg-slate-800 bg-opacity-75 dark:bg-opacity-75 p-3 rounded">
              Our Vision
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="text-2xl px-4">
              Univent team works on making the Egyptian products capital on the
              list of the high-quality products to become a (Made in Egypt)
              guide on the ultimate quality and workmanship spread our products
              all over the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10 md:py-28">
          <div className="md:w-1/2 text-2xl px-4">
            <p>
              Since 1979, Univent © became one of the most important companies
              in the Ventilation Fan field. We continue in our development
              journey using the latest engineering methods and international
              standards to achieve our vision. Univent offers a wide range of
              ventilation products for multiple applications, such as standard
              buildings, health, and industrial fields.
            </p>
          </div>
          <div
            className="md:w-1/2 w-full h-[400px] flex justify-center items-center bg-cover bg-center text-5xl"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          >
            <h3 className="bg-white h-fit  dark:bg-slate-800 bg-opacity-75 dark:bg-opacity-75 p-3 rounded">
              Our Mission
            </h3>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="px-4 bg-gray-200 dark:bg-black text-text-light dark:text-text-dark pb-10 border-gray-200 dark:border-white border-y-2">
        <h2 className="text-center text-5xl py-16 font-bold  border-black/20 dark:border-white border-b-2 ">
          Our Projects
        </h2>
        <div className="pt-8">
          <BentoGridDemo />
        </div>
      </div>
      {/* Clients */}
      <div className=" bg-white dark:bg-black text-text-light dark:text-text-dark py-16">
        <h2 className="text-center text-5xl py-16 font-bold  border-black dark:border-white">
          Our Clients
        </h2>
        <div>
          <ImageSlider />
        </div>
      </div>
      {/* Certificates */}
      <div className="bg-gray-200 dark:bg-black text-text-light dark:text-text-dark py-16">
        <h2 className="text-center text-5xl py-16 font-bold  border-black dark:border-white">
          Certificates
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-10 mx-8 gap-4">
          <div className="relative h-[300px] bg-white col-span-2 overflow-hidden rounded-lg shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex bg-white/50 items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
              EOS Certificates
            </div>
            <div
              className="absolute inset-0  bg-white flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/images/Certificates/Main/EOS.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative h-[300px] bg-white col-span-2 overflow-hidden rounded-lg shadow-lg shadow-black/50">
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative h-[300px] bg-white col-span-2 overflow-hidden rounded-lg shadow-lg shadow-black/50">
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative h-[300px] bg-white col-span-2 overflow-hidden rounded-lg shadow-lg shadow-black/50">
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative h-[300px] bg-white col-span-2 overflow-hidden rounded-lg shadow-lg shadow-black/50">
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
