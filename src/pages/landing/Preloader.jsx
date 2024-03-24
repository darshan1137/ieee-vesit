import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/home/ieeelogo.png";

const Preloader = ({ setIsLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setIsLoaded]);

  const text = "IEEE VESIT";

  return (
    <div
      className="preloader-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      {isLoading ? (
        <motion.div
          className="preloader-content"
          style={{ textAlign: "center" }}
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
          {!imageError ? (
            <motion.img
              src={Logo}
              alt="Loading"
              className="rounded-full"
              style={{ width: "150px", height: "150px", margin: "0 auto" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onError={() => setImageError(true)}
            />
          ) : null}
          <motion.h1
            className="preloader-name text-white text-xl md:text-3xl lg:text-3xl ml-4 uppercase mx-auto"
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
      ) : (
        <div
          className="preloader-content"
          style={{ textAlign: "center", width: "100%" }}
        >
          <h1
            className="preloader-name text-white text-xl md:text-3xl lg:text-3xl uppercase mx-auto"
            style={{ fontFamily: "BIZ UDPMincho, serif" }}
          >
            {text}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Preloader;
