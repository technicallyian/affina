"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Initial position off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]); // Added isVisible to dependency array

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{ x: position.x - 2, y: position.y - 22 }} // Offset to position icon slightly right and above cursor
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }} // Adjusted spring for a bit more responsiveness
    >
      <Image src="/icons/affinaIcon.svg" alt="Cursor Icon" width={24} height={24} />
    </motion.div>
  );
};

export default CustomCursor; 