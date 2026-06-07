// src/components/CursorGlow.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updatePosition);

    return () =>
      window.removeEventListener(
        "mousemove",
        updatePosition
      );
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 180,
          y: position.y - 180,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="
          fixed
          left-0
          top-0
          z-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: position.x - 100,
          y: position.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
        className="
          fixed
          left-0
          top-0
          z-0
          h-[200px]
          w-[200px]
          rounded-full
          bg-purple-500/10
          blur-[100px]
          pointer-events-none
        "
      />
    </>
  );
};

export default CursorGlow;