"use client";
import React from "react";
import StickyScroll from "../components/sticky-scroll-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function About() {
  const pageContent = [
    {
      title: "Innovation and Mechanization",
      description:
        "At Univent, we believe in staying ahead of the curve. Our factory is equipped with state-of-the-art machinery, ensuring that we can produce the highest quality products efficiently. We regularly invest in new technologies to maintain our competitive edge.",
      content: <Image src="./images/About/Modern.avif" alt="Introduction" />,
    },
    {
      title: "Extensive Experience",
      description:
        "With over four decades of experience, Univent has built a reputation for reliability and expertise. Our long history in the industry means we understand the complexities of ventilation systems and can provide solutions that meet and exceed customer expectations.",
      content: <Image src="./images/About/Exp.png" alt="Features" />,
    },
    {
      title: "Unified Teamwork",
      description:
        "Our success is built on the strength of our team. From the sales and HR departments to our engineers and technicians, everyone at Univent works together with a common goal. This cohesive approach ensures that we deliver the best possible products and services to our customers.",
      content: <Image src="./images/About/Teamwork.jpg" alt="Conclusion" />,
    },
  ];

  return (
    <div className="">
      <div
        className="flex h-[40dvh] items-center justify-center text-3xl font-bold text-white  md:text-4xl lg:text-6xl"
        style={{
          backgroundImage: "url('./images/About/AboutUs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className=" rounded-xl bg-background-light/70 px-8 py-4 text-text-light dark:bg-[#262629]/70 dark:text-text-dark">
          About Us
        </h1>
      </div>
      <div className="dark:bg-[#40414f]/20">
        <h2 className="pt-16 text-center text-5xl font-semibold">Our Vision</h2>
        {/*         Large */}
        <div className="hidden flex-col items-center justify-between gap-10 py-10 md:flex md:flex-row md:py-28">
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Vision.jpg')" }}
          ></div>
          <div className="md:w-1/2">
            <p className="px-4 text-2xl">
              At Univent, we are dedicated to placing Egyptian products at the
              forefront of high-quality manufacturing. Our vision is to make
              &quot;Made in Egypt&quot; a hallmark of excellence and superior
              craftsmanship, with our products recognized and trusted worldwide.
            </p>
          </div>
        </div>
        {/*         Small */}
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:hidden md:flex-row md:py-28">
          <div className="md:w-1/2">
            <p className="px-10 text-2xl">
              At Univent, we are dedicated to placing Egyptian products at the
              forefront of high-quality manufacturing. Our vision is to make
              &quot;Made in Egypt&quot; a hallmark of excellence and superior
              craftsmanship, with our products recognized and trusted worldwide.
            </p>
          </div>
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Vision.jpg')" }}
          ></div>
        </div>
        <h2 className="pt-16 text-center text-5xl font-semibold">
          Our Mission
        </h2>
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-28">
          <div className="px-10 text-2xl md:w-1/2 md:px-40">
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
          <div
            className="flex h-[400px]  w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          ></div>
        </div>
      </div>
      <div>
        <StickyScroll content={pageContent} />
      </div>
      <div className="bg-white px-10 py-16 dark:bg-[#40414f]/40">
        <h2 className="pb-8 pt-16 text-center text-5xl font-semibold">
          Our Products
        </h2>
        <p className="pb-8 text-center text-2xl font-light">
          Univent offers a diverse range of ventilation products designed to
          meet various needs:
        </p>
        <div className=" flex flex-wrap justify-center gap-x-10 gap-y-14 py-8 text-xl">
          <div className="flex w-full gap-x-2 md:w-5/12">
            <FontAwesomeIcon icon={faFan} size="0.5" />
            <p>
              Residential Ventilation: Quiet and efficient solutions for homes.
            </p>
          </div>
          <div className="flex w-full  gap-x-2 md:w-5/12">
            <FontAwesomeIcon icon={faFan} size="0.5" />
            <p>
              Healthcare Ventilation: Clean air solutions for hospitals and
              clinics.
            </p>
          </div>
          <div className="flex w-full  gap-x-2 md:w-5/12">
            <FontAwesomeIcon icon={faFan} size="0.5" />
            <p>
              Commercial Ventilation: High-performance systems for businesses.
            </p>
          </div>
          <div className="flex w-full  gap-x-2 md:w-5/12">
            <FontAwesomeIcon icon={faFan} size="0.5" />
            <p>
              Industrial Ventilation: Heavy-duty fans for factories and
              warehouses.
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" px-8 pt-16 dark:bg-[#40414f]/40">
        <h2 className="pb-4 pt-16 text-center text-5xl font-semibold">
          Customer Satisfaction
        </h2>
        <p className="pb-8 text-center text-2xl font-light">
          At Univent, we prioritize customer satisfaction above all else. Our
          team is committed to providing exceptional service and support to
          ensure that our clients receive the best possible experience. We offer
          personalized solutions, quick response times, and ongoing assistance
          to meet your needs.
        </p>
      </div> */}
      <div className="bg-background-light px-8 py-16 dark:bg-[#40414f]/20">
        <div>
          <h3 className="pb-4 pt-10 text-center text-5xl font-semibold">
            Our Values
          </h3>
          <p className="pb-8 text-center text-2xl font-light">
            At Univent, we prioritize customer satisfaction above all else.
          </p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 pt-14">
            <div className="flex w-full gap-x-2 py-4 md:w-5/12">
              <h4 className="text-lg font-extrabold">Quality:</h4>
              <p className="text-lg">
                We are dedicated to delivering products of the highest quality,
                ensuring that our customers receive reliable and long-lasting
                solutions.
              </p>
            </div>
            <div className="flex w-full gap-x-2 py-4 md:w-5/12">
              <h4 className="text-lg font-extrabold">Integrity:</h4>
              <p className="text-lg">
                We conduct our business with honesty and transparency, building
                trust with our clients and partners.
              </p>
            </div>
            <div className="flex w-full gap-x-2 py-4 md:w-5/12">
              <h4 className="text-lg font-extrabold">Innovation:</h4>
              <p className="text-lg">
                We are committed to innovation and continuous improvement,
                developing new technologies and solutions to meet evolving
                customer needs.
              </p>
            </div>
            <div className="flex w-full gap-x-2 py-4 md:w-5/12">
              <h4 className="text-lg font-extrabold">Teamwork: </h4>
              <p className="text-lg">
                We believe in the power of teamwork and collaboration, working
                together to achieve our goals and deliver exceptional results.
              </p>
            </div>
            <div className="flex w-full gap-x-2 py-4 md:w-6/12">
              <h4 className="text-lg font-extrabold">Customer Focus:</h4>
              <p className="text-lg">
                Our customers are at the center of everything we do. We listen
                to their feedback and work to exceed their expectations at every
                turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
