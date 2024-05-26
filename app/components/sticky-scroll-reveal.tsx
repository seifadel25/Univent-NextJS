import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { cn } from "../utils/cn";

export default function StickyScroll({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref, // Ensure this is the scroll container
    offset: ["start start", "end start"],
  });
  const progressBarHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["3%", "100%"],
  );

  // Use scroll progress to transform width and color
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  const cardLength = content.length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0,
      );
      setActiveCard(closestBreakpointIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, cardLength, content]);

  const backgroundColors = [
    "bg-background-light",
    "var(--background-color-2)",
    "var(--background-color-3)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--white), var(--gray-500))",
    "linear-gradient(to bottom right, var(--white), var(--gray-200))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-900))",
  ];

  return (
    <motion.div
      className="relative flex h-[45rem] justify-center space-x-10 overflow-y-auto rounded-md bg-slate-950 p-10 scrollbar-hide"
      ref={ref}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
    >
      <motion.div
        className=" rounded-2xl bg-slate-950 duration-500  ease-in-out dark:bg-gray-100"
        style={{
          position: "sticky",
          top: 100,
          left: 5,
          height: progressBarHeight,
          width: "4px",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-64">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-4xl font-bold text-slate-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-10 max-w-sm text-lg text-slate-700 dark:text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "sticky top-24 hidden h-80 w-96 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
}
