import Image from "next/image";
import Link from "next/link";
import React from "react";

const ATJC = [
  {
    image: "/images/Certificates/ATJC/ATJC1.png",
    link: "/images/Certificates/ATJC/ATJC1.pdf",
  },
  {
    image: "/images/Certificates/ATJC/ATJC2.png",
    link: "/images/Certificates/ATJC/ATJC2.pdf",
  },
  {
    image: "/images/Certificates/ATJC/ATJC3.png",
    link: "/images/Certificates/ATJC/ATJC3.png",
  },
  {
    image: "/images/Certificates/ATJC/ATJC4.png",
    link: "/images/Certificates/ATJC/ATJC4.pdf",
  },
  {
    image: "/images/Certificates/ATJC/ATJC5.png",
    link: "/images/Certificates/ATJC/ATJC5.pdf",
  },
];
const MCL = [
  {
    image: "/images/Certificates/MCL/MCL1.png",
    link: "/images/Certificates/MCL/MCL1.pdf",
  },
  {
    image: "/images/Certificates/MCL/MCL2.png",
    link: "/images/Certificates/MCL/MCL2.png",
  },
  {
    image: "/images/Certificates/MCL/MCL3.png",
    link: "/images/Certificates/MCL/MCL3.png",
  },
  {
    image: "/images/Certificates/MCL/MCL4.png",
    link: "/images/Certificates/MCL/MCL4.png",
  },
  {
    image: "/images/Certificates/MCL/MCL5.png",
    link: "/images/Certificates/MCL/MCL5.png",
  },
];
const NO = [
  {
    image: "/images/Certificates/NO/NO1.png",
    link: "/images/Certificates/NO/الهيئة القومية 1_20231207_0001.pdf",
  },
  {
    image: "/images/Certificates/NO/NO2.png",
    link: "/images/Certificates/NO/الهيئة القومية 2_20231207_0001.pdf",
  },
  {
    image: "/images/Certificates/NO/NO3.png",
    link: "/images/Certificates/NO/الهيئة القوميه 3_20231207_0001.pdf",
  },
];
const UDEM = [
  {
    image: "/images/Certificates/Udem/Udem1.png",
    link: "/images/Certificates/UDEM/1714371798172895龙标-UDEM-LVD+EMC.pdf",
  },
];
const EOS = [];
const ISO = [];
const RUCK = [];

function page() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('./images/Certificates/Main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex h-[50vh] items-center justify-center text-3xl font-bold text-text-light dark:text-text-dark md:text-4xl lg:text-6xl"
      >
        <h1 className="rounded-xl bg-background-light/60 px-8 py-4 text-center  font-bold dark:bg-[#262629]/60">
          Certificates
        </h1>
      </div>
      <div className="-mt-16 bg-background-light/90 dark:bg-background-dark/90">
        <div id="ATJC" className="px-6 dark:bg-[#40414f]/20">
          <h2 className="pl-10 pt-8 text-4xl font-semibold">
            ATJC: AN TENG TESTING CERTIFICATION
          </h2>
          <div>
            {/* <p className="px-4 text-2xl">
              Our products are certified by AN TENG TESTING CERTIFICATION
              (ATJC), a leading Chinese certification body. This certification
              ensures that our products meet the highest standards for
              performance, safety, and quality.
            </p> */}
            <div className="">
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {ATJC.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link id="ATJC" href={item.link}>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="ATJC Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="MCL" className="bg-white px-6 dark:bg-[#40414f]/40">
          <h2 className="pl-10 pt-8 text-4xl font-semibold">
            MCL: Measurements and Calibration Labs
          </h2>
          <div>
            <div className="">
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {MCL.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link id="MCL" href={item.link}>
                      <Image
                        className=" rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="Measurements and Calibration Labs Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="NO" className="bg-background-light px-6 dark:bg-[#40414f]/20">
          <h2 className="pl-10 pt-8 text-4xl font-semibold">
            National Organization For Potable Water & Sanitary Drainage
          </h2>
          <div>
            <div>
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {NO.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link href={item.link} className="">
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="National Organization For Potable Water & Sanitary Drainage Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="UDEM" className="bg-white px-6 dark:bg-[#40414f]/40">
          <h2 className="pt-8 text-center text-4xl font-semibold">
            Udem System and Product Certification{" "}
          </h2>
          <div>
            <div>
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {UDEM.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link href={item.link}>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="Udem Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="EOS" className="bg-background-light px-6 dark:bg-[#40414f]/20">
          <h2 className="pt-8 text-center text-4xl font-semibold">
            EOS: Egyptian Organization for Standardization
          </h2>
          <div>
            <div>
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {EOS.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link href={item.link}>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="Egyptian Organization for Standardization Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="ISO" className="bg-white px-6 dark:bg-[#40414f]/40">
          <h2 className="pt-8 text-center text-4xl font-semibold">
            ISO 9001 -2018 Certification
          </h2>
          <div>
            <div>
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {ISO.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link href={item.link}>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="ISO 9001 -2018 Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="RUCK"
          className="bg-background-light px-6 dark:bg-[#40414f]/20"
        >
          <h2 className="pt-8 text-center text-4xl font-semibold">
            Ruck-Germany Certification
          </h2>
          <div>
            <div>
              <div className="flex flex-wrap justify-center gap-6 px-10 py-8">
                {RUCK.map((item, index) => (
                  <div
                    key={index}
                    className="w-[60dvw] sm:w-[50dvw] md:w-[17dvw]"
                  >
                    <Link href={item.link}>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        width={500}
                        height={700}
                        alt="Ruck-Germany Certificate"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
