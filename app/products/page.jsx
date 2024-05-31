import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HeroParallax } from "../components/heroParallax";

const categories = [
  "Decorative Fans",
  "Wall Mounted Fans",
  "Duct Fans",
  "DIDW Fans",
  "SISW Fans",
  "Roof Top Fans",
  "Axial Inline Fans",
  "Smoke Fans",
  "Accessories",
  "Filters",
];

const hero = [
  {
    title: "RSH",
    link: "#RSH",
    thumbnail: "/images/Products/Hero/RSH.png",
  },
  {
    title: "TST",
    link: "#TST",
    thumbnail: "/images/Products/Hero/TST.png",
  },
  {
    title: "EM Model Ruck Axial Inline Fan",
    link: "#EM Model Ruck Axial Inline Fan",
    thumbnail: "/images/Products/Hero/EMMRUCK.png",
  },
  {
    title: "EL E Model Ruck Axial Inline Fan",
    link: "#EL Model Ruck Axial Inline",
    thumbnail: "/images/Products/Hero/ELERUCK.png",
  },
  {
    title: "DSX",
    link: "#DSX",
    thumbnail: "/images/Products/Hero/DSX.png",
  },
  {
    title: "BXV",
    link: "#BXV",
    thumbnail: "/images/Products/Hero/BXV.png",
  },
  {
    title: "Jet Fan",
    link: "#Jet Fan",
    thumbnail: "/images/Products/Hero/JETFAN.png",
  },
  {
    title: "AT Model Fan Section",
    link: "#AT Model Fan Section",
    thumbnail: "/images/Products/Hero/ATMODEL.png",
  },
];

const products = [
  {
    title: "Slim",
    description: "Low noise fans with low power consumption",
    category: "Decorative Fans",
    link: "/products/Slim",
    thumbnail: "/images/Products/SLIM.png",
  },
  {
    title: "AXW MODEL",
    description:
      "Axial wall mounted fan direct driven Plate mounted casing , galvanized steel epoxy paintedC/W external rotor motors IP 54 Class 'F'",
    category: "Wall Mounted Fans",
    link: "/products/AXW",
    thumbnail: "/images/Products/AXW.png",
  },
  {
    title: "BXV-PM",
    description:
      "Wall mounted axial flow fan with thermoplastic or aluminum impellers withpitch angle",
    category: "Wall Mounted Fans",
    link: "/products/BXV_PM",
    thumbnail: "/images/Products/BXVPM.png",
  },
  {
    title: "RS",
    description:
      "Straight airflow and easy installation - with the high pressure stability,low noise level and high efficiency",
    category: "Duct Fans",
    link: "/products/RS",
    thumbnail: "/images/Products/RS.png",
  },
  {
    title: "RS Ruck",
    description:
      "Backward curved centrifugal fan, speed controllable and integrated thermal switch",
    category: "Duct Fans",
    link: "/products/RS_Ruck",
    thumbnail: "/images/Products/RSRUCK.png",
  },
  {
    title: "Mixed Flow Fans",
    description:
      "High quality motor made in Nanyoo, run out only 0.35mm, strong air volume and static pressure",
    category: "Duct Fans",
    link: "/products/Mixed_Flow",
    thumbnail: "/images/Products/MIXEDFLOW.png",
  },
  {
    title: "EM Model Ruck Axial Inline Fan",
    description:
      "Diagonal impeller with stator With Plastic housing, 3-step Integrated thermostatic switch, Including mounting bracket",
    category: "Duct Fans",
    link: "/products/EM_Model_Ruck",
    thumbnail: "/images/Products/EMMRUCK.png",
  },
  {
    title: "EL Model Ruck Axial Inline",
    description:
      "Diagonal impeller with stator With Plastic housing, Speed controllable, Integrated thermostatic switch, Including mounting bracket",
    category: "Duct Fans",
    link: "/products/EL_Model_Ruck",
    thumbnail: "/images/Products/ELERUCK.png",
  },
  {
    title: "MPC Model Ruck",
    description:
      "Motor inside the airflow, Galvanized metal housing, Speed controllable, 30 mm insulation, With bottom pan, Variable outlet",
    category: "Duct Fans",
    link: "/products/MPC_Model_Ruck",
    thumbnail: "/images/Products/MPCRUCK.png",
  },
  {
    title: "MPC T Model Ruck",
    description:
      " Motor outside of air stream, Galvanized metal housing, Speed controllable, Bottom pan with drain, 30 mm insulation",
    category: "Duct Fans",
    link: "/products/MPC_T_Model_Ruck",
    thumbnail: "/images/Products/MPCTRUCK.png",
  },
  {
    title: "MPC TI Model Ruck (120°C)",
    description:
      " Linear airflow, Star-Delta operation possible Star: direct 400V 3~ grid or frequency converter with 400V output Delta: direct 230V 3~ grid or frequency converter with 230V 1~ input and 230V 3~ output",
    category: "Duct Fans",
    link: "/products/MPC_TI_Model_Ruck",
    thumbnail: "/images/Products/MPCTIRUCK.png",
  },
  {
    title: "KVT Ruck",
    description:
      "Forward curved centrifugal fan, Galvanized metal housing, Speed controllable, Integrated thermostatic switch ,Swing-out fan unit",
    category: "Duct Fans",
    link: "/products/KVT_Ruck",
    thumbnail: "/images/Products/KVTRUCK.png",
  },
  {
    title: "AT Model Fan Section",
    description:
      "Fan section , Anticorrosive galvanized steel Sheet, Side glass , Vibrations isolation of Mineral wool",
    category: "DIDW Fans",
    link: "/products/AT_MODEL",
    thumbnail: "/images/Products/ATMODEL.png",
  },
  {
    title: "AT-S ",
    description:
      "Double-inlet, belt-driven centrifugal fans with axis outlet on both sides and impeller with forward-facing blades",
    category: "DIDW Fans",
    link: "/products/ATS",
    thumbnail: "/images/Products/ATS.png",
  },
  {
    title: "AT-TIC",
    description:
      "Double-inlet, belt-driven centrifugal fans with reinforced structure and rigid bridge bearings supported on the structure",
    category: "DIDW Fans",
    link: "/products/ATTIC",
    thumbnail: "/images/Products/ATTIC.png",
  },
  {
    title: "ADH",
    description:
      "Double-inlet, belt-driven centrifugal fans with reinforced structure and rigid bridge bearings supported on the structure",
    category: "DIDW Fans",
    link: "/products/ADH",
    thumbnail: "/images/Products/ADH.png",
  },
  {
    title: "RDH",
    description: "High Pressure centrifugal fans backward Curved –Welded",
    category: "DIDW Fans",
    link: "/products/RDH",
    thumbnail: "/images/Products/RDH.png",
  },
  {
    title: "RSH",
    description:
      "Single-inlet, belt-driven centrifugal fans with axis outlet and impeller with backward-facing blades",
    category: "SISW Fans",
    link: "/products/RSH",
    thumbnail: "/images/Products/RSH.png",
  },
  {
    title: "RS-R",
    description:
      "backward curved centrifugal fan, metal housing RAL 7035, speed controllable",
    category: "Roof Top Fans",
    link: "/products/RS_R",
    thumbnail: "/images/Products/RSR.png",
  },
  {
    title: "SIWF",
    description:
      "Roof Top Fan with Impeller motor kti and external rotor motor and impeller with backward-facing blades",
    category: "Roof Top Fans",
    link: "/products/SIWF",
    thumbnail: "/images/Products/SIWF.png",
  },
  {
    title: "DVA RUCK",
    description:
      "Backward curved centrifugal fan, Housing made of aluminium AlMg3, Speed controllable, Integrated thermostatic switch, Maintenance-free ball bearings",
    category: "Roof Top Fans",
    link: "/products/DVARUCK",
    thumbnail: "/images/Products/DVARUCK.png",
  },
  {
    title: "DVN RUCK",
    description:
      "Max. medium temperature 120°C, motor outside the air stream due to protection plate, Swing-out fan section, Speed controllable, Drain tray",
    category: "Roof Top Fans",
    link: "/products/DVNRUCK",
    thumbnail: "/images/Products/DVNRUCK.png",
  },
  {
    title: "BXV-R",
    description:
      "Short cased axial roof top ventlator, fan with thermoplastic or aluminum impellers with pitch angle",
    category: "Roof Top Fans",
    link: "/products/BXV_R",
    thumbnail: "/images/Products/BXVR.png",
  },
  {
    title: "BXV-R BOX",
    description:
      "Short cased axial roof top With box ventlator fan with thermoplastic or aluminum impellers with pitch angle",
    category: "Roof Top Fans",
    link: "/products/BXV_R_BOX",
    thumbnail: "/images/Products/BXVRBOX.png",
  },
  {
    title: "BXV",
    description:
      "Long and short cased axial flow fan with thermoplastic  or aluminum impellers with pitch angle",
    category: "Axial Inline Fans",
    link: "/products/BXV",
    thumbnail: "/images/Products/BXV.png",
  },
  {
    title: "BXV-BD",
    description:
      "short cased belt driven axial flow fan with thermoplastic or aluminum impellers with pitch angle.",
    category: "Axial Inline Fans",
    link: "/products/BXV_BD",
    thumbnail: "/images/Products/BXVBD.png",
  },
  {
    title: "TST",
    description:
      "Cased axial fans with short casing for working inside fire danger zones, 400°C/2h",
    category: "Smoke Fans",
    link: "/products/TST",
    thumbnail: "/images/Products/TST.png",
  },
  {
    title: "Jet Fan",
    description:
      "Jet fans especially designed for tunnel ventilation. 400ºC/2h, 300ºC/2h and 200ºC/2h, Certificates according to model",
    category: "Smoke Fans",
    link: "/products/JETFAN",
    thumbnail: "/images/Products/JETFAN.png",
  },
  {
    title: "DSX",
    description:
      "400°C/2h centrifugal belt-driven fans with backward-curved impeller",
    category: "Smoke Fans",
    link: "/products/DSX",
    thumbnail: "/images/Products/DSX.png",
  },
  {
    title: "CADSX",
    description:
      "400°C/2h belt-driven extraction units with backward-curved impeller",
    category: "Smoke Fans",
    link: "/products/CADSX",
    thumbnail: "/images/Products/CADSX.png",
  },
  {
    title: "MPC TI F4 RUCK Smoke Fan",
    description:
      "200°C constant operation and 400°C/2h, EN 12101-3:2015, Certificate 1404-CPR-3072, Star-Delta compatible, Fire-Mode function",
    category: "Smoke Fans",
    link: "/products/MPC_TI_F4_RUCK",
    thumbnail: "/images/Products/MPCTIF4RUCK.png",
  },
  {
    title: "DVN F4 RUCK Smoke Roof Fan",
    description:
      "200°C constant operation and 400°C/2h, EN 12101-3:2015, Certificate 1404-CPR-3072, Star-Delta compatible, Fire-Mode function",
    category: "Smoke Fans",
    link: "/products/DVN_F4_RUCK",
    thumbnail: "/images/Products/DVNF4RUCK.png",
  },
  {
    title: "Air Curtain",
    description:
      "Slim all metal housing with esthetic curved design, Full metal shell and minimal maintenance, Easy installation and cleaning",
    category: "Smoke Fans",
    link: "/products/AirCurtain",
    thumbnail: "/images/Products/AIRCURTAIN.png",
  },
  {
    title: "BXV-BIF Cylinderical ",
    description:
      "Bifurcated axian fans are quality, direct motor driven units specially for handling hostile air conditions. Hot, Dust laden, Corrosive fumes or gases can all be handled. Cylinderical Range 400 to 1250mm",
    category: "Smoke Fans",
    link: "/products/BXV_BIF1",
    thumbnail: "/images/Products/BXVBIF1.png",
  },
  {
    title: "BXV-BIF Conical ",
    description:
      "Bifurcated axian fans are quality, direct motor driven units specially for handling hostile air conditions. Hot, Dust laden, Corrosive fumes or gases can all be handled. Conical Range 315 to 630 mm",
    category: "Smoke Fans",
    link: "/products/BXVBIF2",
    thumbnail: "/images/Products/BXVBIF2.png",
  },
  {
    title: "Square Grill with Shutters",
    description: "Square Grill with Shutters 100 - 120 - 150 mm Diameter",
    category: "Accessories",
    link: "/products/SQGRILL",
    thumbnail: "/images/Products/SQGRILL.png",
  },
  {
    title: "Fan Damper",
    description: "Fan Damper 100 - 120  mm Diameter",
    category: "Accessories",
    link: "/products/FANDAMPER",
    thumbnail: "/images/Products/FANDAMPER.png",
  },
  {
    title: "All-Purpose Plastic Diffuser",
    description: "All-Purpose Plastic Diffuser 100 - 120 - 150 mm Diameter",
    category: "Accessories",
    link: "/products/PLASTICDIFFUSER",
    thumbnail: "/images/Products/PLASTICDIFFUSER.png",
  },
  {
    title: "Circular Grill",
    description: "Circular Grill 100 - 120 - 150 mm Diameter",
    category: "Accessories",
    link: "/products/CIRCGRILL",
    thumbnail: "/images/Products/CIRCGRILL.png",
  },
  {
    title: "Wood Diffuser",
    description: "Wood Diffuser 100 - 120 - 160 mm Diameter",
    category: "Accessories",
    link: "/products/WOODDIFF",
    thumbnail: "/images/Products/WOODDIFF.png",
  },
  {
    title: "Round Ceiling Grill",
    description: "Round Ceiling Grill 100 - 120 - 150 mm Diameter",
    category: "Accessories",
    link: "/products/ROUNDGRILL",
    thumbnail: "/images/Products/ROUNDGRILL.png",
  },
  {
    title: "Pre-Filter",
    description:
      "Primary airfilter with aluminum frame, Woven aluminum wire media , 75% Efficiency",
    category: "Filters",
    link: "/products/PreFilter",
    thumbnail: "/images/Products/PREFILTER.png",
  },
  {
    title: "Bag Filter",
    description:
      "Bag airfilter with aluminum frame, Polyster media, 85% Efficiency",
    category: "Filters",
    link: "/products/BagFilter",
    thumbnail: "/images/Products/BAGFILTER.png",
  },
  {
    title: "Hepa Filter",
    description:
      "Hepa airfilter with aluminum frame, Glass micro-fibre media, 99.9% Efficiency",
    category: "Filters",
    link: "/products/HepaFilter",
    thumbnail: "/images/Products/HEPAFILTER.png",
  },
  {
    title: "Sand Trap Louver",
    description:
      "Aluminum sand trap louver to seperate sand particular and large dust",
    category: "Filters",
    link: "/products/SandTrapLouver",
    thumbnail: "/images/Products/SANDTRAP.png",
  },
];
export default function Products() {
  return (
    <div className="">
      <div>
        <HeroParallax products={hero} />
      </div>
      <div className="pt-14 font-semibold dark:bg-[#40414f]/40">
        <h2 className="text-center text-5xl md:text-6xl lg:text-7xl">
          Our Products
        </h2>
        <div className="pt-14">
          {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex w-3/12 flex-col rounded-xl bg-white shadow-lg "
              >
                <Link href={product.link}>
                  <div className="flex justify-center overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-64 rounded-t-lg object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-text-light">
                      {product.title}
                    </h3>
                    <p className="text-gray-600">
                      {product.description || "No description available"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div> */}
          <div className="flex flex-col bg-background-light dark:bg-black">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`py-8" flex flex-col items-center px-8 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-[#40414f]/40"
                    : "bg-background-light dark:bg-[#40414f]/20"
                }`}
              >
                <h2 className="pb-14 pt-24 text-3xl font-semibold md:text-4xl lg:text-5xl">
                  {category}
                </h2>
                <div
                  className={`grid grid-cols-1 gap-x-6 gap-y-10 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
                    index == categories.length - 1 ? "pb-44" : ""
                  }`}
                >
                  {products
                    .filter((product) => product.category === category)
                    .map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col rounded-xl border-1 bg-white shadow-xl shadow-black/25 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-black/40 dark:shadow-xl dark:shadow-white/25 dark:hover:shadow-white/40"
                      >
                        <div className=" cursor-pointer" id={product.title}>
                          <div className="flex justify-center overflow-hidden">
                            <Image
                              width={500}
                              height={500}
                              src={product.thumbnail}
                              alt={product.title}
                              className="h-64 rounded-t-lg object-contain"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-xl font-semibold text-text-light">
                              {product.title}
                            </h3>
                            <p className="text-gray-600">
                              {product.description ||
                                "No description available"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
