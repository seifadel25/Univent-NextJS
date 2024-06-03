"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.65, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative -mt-8 flex h-[280vh] flex-col self-auto  overflow-hidden bg-background-light py-40 antialiased [perspective:1000px] [transform-style:preserve-3d] dark:bg-[#40414f]/20"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-10 space-x-reverse">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
              opacity={opacity}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex  flex-row space-x-10 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
              opacity={opacity}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row-reverse space-x-10 space-x-reverse">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
              opacity={opacity}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40">
      <h1 className="text-center text-5xl font-bold text-text-light dark:text-text-dark md:text-start md:text-7xl">
        Climate Control
        <br /> Redefined for Every Space
      </h1>
      <p className="mt-8 max-w-2xl text-center text-xl font-semibold text-text-light dark:text-text-dark md:text-start md:text-xl">
        Experience unparalleled comfort with innovative heating, ventilation,
        and air conditioning.
        <br />
        From installation to maintenance, our comprehensive HVAC services keep
        your environment perfect all year round
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  opacity,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  };
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        opacity,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="500"
          width="500"
          className="absolute inset-0 h-[250px] w-[250px] object-contain object-left-top md:h-full md:w-full"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-background-light/40 opacity-0 group-hover/product:opacity-80 dark:bg-black/50"></div>
      <h2 className="absolute bottom-4 left-4 font-semibold text-black opacity-0 group-hover/product:opacity-100 dark:text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
