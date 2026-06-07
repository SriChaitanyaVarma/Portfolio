import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#0A0A0A]
      "
    >
      <div className="text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div
            className="
              inline-flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              SC
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-6
            text-2xl
            font-semibold
            text-white
          "
        >
          Sri Chaitanya Varma
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
            mt-2
            text-sm
            text-white/50
          "
        >
          Software Developer • React Developer
        </motion.p>

        <div className="mt-8 flex justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            className="
              h-6
              w-6
              rounded-full
              border-2
              border-accent
              border-t-transparent
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;