"use client";
import React from "react";
import StickyScroll from "../components/sticky-scroll-reveal";

export default function About() {
  const pageContent = [
    {
      title: "Innovation and Mechanization",
      description:
        "At Univent, we believe in staying ahead of the curve. Our factory is equipped with state-of-the-art machinery, ensuring that we can produce the highest quality products efficiently. We regularly invest in new technologies to maintain our competitive edge.",
      content: <img src="./images/About/Modern.avif" alt="Introduction" />,
    },
    {
      title: "Extensive Experience",
      description:
        "With over four decades of experience, Univent has built a reputation for reliability and expertise. Our long history in the industry means we understand the complexities of ventilation systems and can provide solutions that meet and exceed customer expectations.",
      content: <img src="./images/About/Exp.png" alt="Features" />,
    },
    {
      title: "Unified Teamwork",
      description:
        "Our success is built on the strength of our team. From the sales and HR departments to our engineers and technicians, everyone at Univent works together with a common goal. This cohesive approach ensures that we deliver the best possible products and services to our customers.",
      content: <img src="./images/About/Teamwork.jpg" alt="Conclusion" />,
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
        <h1 className=" rounded-xl bg-background-light/70 px-8 py-4 text-text-light dark:bg-background-dark/70 dark:text-text-dark">
          About Us
        </h1>
      </div>
      <div>
        <h2 className="pt-16 text-center text-5xl font-semibold">Our Vision</h2>

        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-28">
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
        <h2 className="pt-16 text-center text-5xl font-semibold">
          Our Mission
        </h2>
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-28">
          <div className="px-4 text-2xl md:w-1/2">
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
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center text-5xl md:w-1/2"
            style={{ backgroundImage: "url('/images/About/Mission.jpg')" }}
          ></div>
        </div>
      </div>
      <div>
        <h2 className="bg-white py-6 text-center text-4xl font-semibold dark:bg-slate-950">
          What Makes Our HVAC Factory Special?
        </h2>
        <StickyScroll content={pageContent} />
      </div>
      <div className="py-16">
        <h2 className="pt-16 text-center text-5xl font-semibold">
          Our Products
        </h2>
        <p className="pb-8 text-center text-2xl font-light">
          Univent offers a diverse range of ventilation products designed to
          meet various needs:
        </p>
        <div className="mx-5 flex flex-wrap gap-y-6 pb-8">
          <p className="w-1/2 text-center">
            Residential Ventilation: Quiet and efficient solutions for homes.
          </p>
          <p className="w-1/2 text-center">
            Healthcare Ventilation: Clean air solutions for hospitals and
            clinics.
          </p>
          <p className="w-1/2 text-center">
            Commercial Ventilation: High-performance systems for businesses.
          </p>
          <p className="w-1/2 text-center">
            Industrial Ventilation: Heavy-duty fans for factories and
            warehouses.
          </p>
        </div>
      </div>
      <div className="bg-background-light px-8 pt-16 dark:bg-background-dark">
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
      </div>
      <div className="bg-background-light px-8 py-16 dark:bg-background-dark">
        <div>
          <h3 className="pb-4 pt-16 text-center text-5xl font-semibold">
            Our Values
          </h3>
          <div className="flex gap-x-2 py-4">
            <h4 className="font-semibold">Quality:</h4>
            <p>
              We are dedicated to delivering products of the highest quality,
              ensuring that our customers receive reliable and long-lasting
              solutions.
            </p>
          </div>
          <div className="flex gap-x-2 py-4">
            <h4 className="font-semibold">Integrity:</h4>
            <p>
              We conduct our business with honesty and transparency, building
              trust with our clients and partners.
            </p>
          </div>
          <div className="flex gap-x-2 py-4">
            <h4 className="font-semibold">Innovation:</h4>
            <p>
              We are committed to innovation and continuous improvement,
              developing new technologies and solutions to meet evolving
              customer needs.
            </p>
          </div>
          <div className="flex gap-x-2 py-4">
            <h4 className="font-semibold">Customer Focus:</h4>
            <p>
              Our customers are at the center of everything we do. We listen to
              their feedback and work to exceed their expectations at every
              turn.
            </p>
          </div>
          <div className="flex gap-x-2 py-4">
            <h4 className="font-semibold">Teamwork: </h4>
            <p>
              We believe in the power of teamwork and collaboration, working
              together to achieve our goals and deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
