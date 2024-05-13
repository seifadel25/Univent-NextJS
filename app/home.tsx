import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { BentoGridDemo } from "./components/BentoGrid";
import { CanvasRevealEffectDemo } from "./components/CanvasReveal.";
import ImageSlider from "./components/ImageSlider";

export default function HomePage() {
  return (
    <div>
      <div className="">
        <HeroHighlight className="rounded-3xl bg-gray-300/30 p-4 text-center text-4xl leading-loose text-text-light dark:bg-gray-900/40 dark:text-text-dark  md:text-5xl lg:text-6xl ">
          <span className="text-7xl font-bold">Univent</span>
          <br /> Where Quality Is Everything.
          <Highlight className="leading-loose">Quality you can Trust</Highlight>
        </HeroHighlight>
      </div>
      <div className="border-t-4 border-gray-200 bg-white px-4 pb-20 text-text-light dark:border-white dark:bg-slate-950 dark:text-text-dark">
        <h2 className="border-b-2 border-gray-200 py-28 text-center text-5xl font-bold dark:border-white">
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
            <p className="px-4 text-2xl">
              Univent team works on making the Egyptian products capital on the
              list of the high-quality products to become a (Made in Egypt)
              guide on the ultimate quality and workmanship spread our products
              all over the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-28">
          <div className="px-4 text-2xl md:w-1/2">
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
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          >
            <h3 className="h-fit rounded  bg-white bg-opacity-75 p-3 dark:bg-slate-800 dark:bg-opacity-75">
              Our Mission
            </h3>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="border-y-2 border-gray-200 bg-gray-200 px-4 pb-10 text-text-light dark:border-white dark:bg-black dark:text-text-dark">
        <h2 className="border-b-2 border-black/20 py-16 text-center  text-5xl font-bold dark:border-white ">
          Our Projects
        </h2>
        <div className="pt-8">
          <BentoGridDemo />
        </div>
      </div>
      {/* Clients */}
      <div className=" bg-white py-16 text-text-light dark:bg-black dark:text-text-dark">
        <h2 className="border-black py-16 text-center text-5xl  font-bold dark:border-white">
          Our Clients
        </h2>
        <div>
          <ImageSlider />
        </div>
      </div>
      {/* Certificates */}
      <div className="bg-gray-200 py-16 text-text-light dark:bg-black dark:text-text-dark">
        <h2 className="border-black py-16 text-center text-5xl  font-bold dark:border-white">
          Certificates
        </h2>
        <div className="mx-8 grid grid-cols-4 gap-4 md:grid-cols-10">
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              EOS Certificates
            </div>
            <div
              className="absolute inset-0  flex items-center justify-center bg-white opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/EOS.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              EOS Certificates
            </div>
            <div
              className="absolute inset-0  flex items-center justify-center bg-white opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/EOS.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
              style={{
                backgroundImage: "url('/images/Certificates/Main/Ruck.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg bg-white shadow-lg shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-100 transition-opacity duration-300 hover:opacity-0">
              We Are Official Distributor for Ruck-Germany
            </div>
            <div
              className="absolute inset-0   flex items-center justify-center opacity-10 transition-opacity duration-300 hover:opacity-100"
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
