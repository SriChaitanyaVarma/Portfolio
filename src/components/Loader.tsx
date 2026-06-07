// src/components/Loader.tsx

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-[#0A0A0A]
      flex
      items-center
      justify-center
    "
    >
      <div className="text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-5xl
            font-bold
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-purple-400
            bg-clip-text
            text-transparent
          "
        >
          CV
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-4
            text-zinc-400
            tracking-widest
            uppercase
          "
        >
          Sri Chaitanya Varma
        </motion.p>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "180px",
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            h-[3px]
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            mx-auto
            mt-6
            rounded-full
          "
        />
      </div>
    </div>
  );
};

export default Loader;