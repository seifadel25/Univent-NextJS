import React, { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

const HorizontalScrollProgress = () => {
  const { scrollXProgress } = useViewportScroll(); // This hook tracks the scroll progress
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollXProgress.onChange((latest) => {
      // Convert the progress to a percentage (0 to 100)
      setProgressWidth(latest * 100);
    });

    return () => unsubscribe();
  }, [scrollXProgress]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        backgroundColor: "#eee",
      }}
    >
      <motion.div
        style={{
          width: `${progressWidth}%`,
          height: "5px",
          backgroundColor: "blue",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progressWidth}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
};

export default HorizontalScrollProgress;
