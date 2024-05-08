"use client";
import { cn } from "../utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative h-[80svh] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* <div className="flex justify-around gap-y-5 absolute flex-row flex-wrap">
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
        <Image src={H1Image} width={400} alt="test" className="bg-black" />
      </div> */}

      <div className="absolute inset-0 opacity-80 bg-neutral-100 dark:bg-neutral-100  pointer-events-none">
        <ImagesSlider
          images={[
            "/images/Hero/jpeg-optimizer_5.png",
            "/images/Hero/jpeg-optimizer_20 (2).png",
            "/images/Hero/jpeg-optimizer_kl.jpg",
            "/images/Hero/jpeg-optimizer_fan 7.png",
          ]}
        >
          <div></div>
        </ImagesSlider>
      </div>
      <motion.div
        className="pointer-events-none bg-white dark:bg-white   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-50"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              50px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-3 rounded-r-lg bg-gradient-to-r from-blue-400 to-blue-700 dark:from-blue-700 dark:to-blue-900`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
