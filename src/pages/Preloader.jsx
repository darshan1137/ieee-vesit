import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ setIsLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);

  

  const text = "Waste Wise Web";

  return (
    <div className="preloader-container">
      {isLoading ? (
        <motion.div
          className="preloader-content"
          initial={{ opacity: 0, scale: 0, y: "50%" }}
          animate={{ opacity: 1, scale: 1.2, y: "0%" }}
          transition={{
            delay: 0.5,
            duration: 2.5,
            type: "spring",
            stiffness: 120,
            ease: "easeInOut",
          }}
          viewport={{ once: false }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className="rounded-full w-80 h-80"
          >
            <defs>
              <clipPath id="fb66969001">
                <motion.path
                  d="M 12.023438 83.3125 L 363 83.3125 L 363 291.8125 L 12.023438 291.8125 Z M 12.023438 83.3125 "
                  clipRule="nonzero"
                  initial={{ scale: 0 }}
                  animate={{ scale: 4 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </clipPath>
            </defs>
            <g clipPath="url(#fb66969001)">
              <motion.path
                fill="none"
                stroke="#00bf63"
                strokeWidth="2"
                d="M 12.164062 83.3125 L 133.707031 291.683594 L 187.5 198.964844 L 241.503906 291.683594 L 362.835938 83.3125 L 284.496094 83.3125 L 228.179688 180.308594 L 239.609375 200.015625 L 295.929688 103.4375 L 328.121094 103.4375 L 241.503906 251.84375 L 199.140625 179.253906 L 255.039062 83.3125 L 231.753906 83.3125 L 187.5 159.335938 L 143.246094 83.3125 L 120.171875 83.3125 L 176.066406 179.253906 L 133.707031 251.84375 L 47.089844 103.4375 L 76.546875 103.4375 L 132.863281 200.015625 L 144.507812 180.308594 L 87.976562 83.3125 Z M 12.164062 83.3125 "
                strokeDasharray="2000"
                strokeDashoffset="2000"
                initial={{ strokeDashoffset: 2000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </g>
          </motion.svg>
          <motion.h1
            className="preloader-name"
            style={{ fontFamily: "BIZ UDPMincho, serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              type: "tween",
              ease: "easeOut",
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Preloader;
