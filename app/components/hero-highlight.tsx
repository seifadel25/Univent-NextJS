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
        "group relative flex h-[70svh] w-full items-center justify-center bg-white dark:bg-black",
        containerClassName,
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
        bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-900 via-sky-500 to-blue-700
      </div> */}

      <div className="pointer-events-none absolute inset-0 dark:bg-[#40414f]/20 blur-[5px]">
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
      {/* <motion.div
        className="pointer-events-none absolute inset-0    opacity-0 transition duration-300 group-hover:opacity-50 dark:bg-white"
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
      /> */}

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
        `relative inline-block rounded-r-lg bg-sky-600 px-3   pb-1 dark:bg-sky-800 `,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
//bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 dark:from-blue-500 dark:via-blue-800 dark:to-blue-950
