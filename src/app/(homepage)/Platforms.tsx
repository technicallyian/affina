"use client"; // Required for hooks like useRef and motion components

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react"; // Import motion
import { Section } from '@/components/Section'; // Keep existing Section if needed, or replace outer tag
import { Heading } from '@/components/typography/Heading';

// Placeholder data for content and blocks
const platformContent = [
  { title: "Platform One", description: "Description for platform one..." },
  { title: "Platform Two", description: "Description for platform two..." },
  { title: "Platform Three", description: "Description for platform three..." },
  { title: "Platform Four", description: "Description for platform four..." },
  { title: "Platform Five", description: "Description for platform five..." },
  { title: "Platform Six", description: "Description for platform six..." },
];

const Platforms = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  // Initialize useScroll - targeting the main section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Animate from the start of the section to the end
  });

  // --- Trigonometric Positioning Approach ---

  const numItems = platformContent.length;
  const segment = 1 / numItems;
  const transitionOverlap = 0.05;
  const radius = 250; // The radius of the circular path

  // 1. Master angle based on scroll (Clockwise)
  const currentAngle = useTransform(scrollYProgress, [0, 1], [0, 270]); // Changed to positive range

  // 2. Opacity for left content
  const opacities = platformContent.map((_, index) => {
    const startTime = index * segment;
    const endTime = startTime + segment;
    const fadeInEndTime = Math.min(startTime + transitionOverlap, (startTime + endTime) / 2);
    const fadeOutStartTime = Math.max(endTime - transitionOverlap, (startTime + endTime) / 2);
    return useTransform(scrollYProgress, [startTime, fadeInEndTime, fadeOutStartTime, endTime], [0, 1, 1, 0]);
  });

  // 3. Subtle highlighting transforms based on scroll segments
  const inactiveOpacity = 0.8;
  const inactiveScale = 0.95;
  const highlightOpacities = platformContent.map((_, index) => {
      const startTime = index * segment;
      const endTime = startTime + segment;
      const fadeInEndTime = Math.min(startTime + transitionOverlap, (startTime + endTime) / 2);
      const fadeOutStartTime = Math.max(endTime - transitionOverlap, (startTime + endTime) / 2);
      return useTransform(scrollYProgress, [startTime, fadeInEndTime, fadeOutStartTime, endTime], [inactiveOpacity, 1, 1, inactiveOpacity]);
  });
  const highlightScales = platformContent.map((_, index) => {
      const startTime = index * segment;
      const endTime = startTime + segment;
      const fadeInEndTime = Math.min(startTime + transitionOverlap, (startTime + endTime) / 2);
      const fadeOutStartTime = Math.max(endTime - transitionOverlap, (startTime + endTime) / 2);
      return useTransform(scrollYProgress, [startTime, fadeInEndTime, fadeOutStartTime, endTime], [inactiveScale, 1, 1, inactiveScale]);
  });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-100">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-white">
        <div className="container mx-auto flex gap-8 relative h-full">

          {/* Left Content Area */}
          <div className="flex-1 flex flex-col justify-center items-start py-16">
             {/* Existing Heading moved here */}
             <Heading as="h2" level={2} className="text-left mb-8">
               Consumer Engagement Platforms
             </Heading>
             {/* Placeholder for dynamic content */}
             <div className="relative h-48 w-full"> {/* Adjust height as needed */}
                {platformContent.map((platform, index) => (
                   <motion.div
                     key={index}
                     className="absolute inset-0 flex flex-col justify-center"
                     style={{ opacity: opacities[index] }}
                   >
                     <h3 className="text-2xl font-semibold mb-2">{platform.title}</h3>
                     <p className="text-gray-600">{platform.description}</p>
                     <button className="mt-4 px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
                        Explore Solutions
                     </button>
                   </motion.div>
                 ))}
             </div>
          </div>

          {/* Right Block Area - Direct Trigonometric Positioning */}
          <div className="flex-1 flex justify-center items-center relative"> {/* No perspective needed */}
            {/* No Parent Rotator Needed */}
            {platformContent.map((_, index) => {
              const baseAngle = index * (360 / numItems); // Calculate base angle for this item
              // Calculate X and Y using transforms based on currentAngle
              const x = useTransform(currentAngle, angle => radius * Math.cos((baseAngle + angle) * Math.PI / 180));
              const y = useTransform(currentAngle, angle => radius * Math.sin((baseAngle + angle) * Math.PI / 180));
              // Revert to tangential rotation (aligns local x-axis/right edge with tangent)
              const blockRotate = useTransform(currentAngle, angle => (baseAngle + angle));
              // Counter-rotation for the content inside the block
              const contentRotate = useTransform(blockRotate, r => -r);

              return (
                <motion.div
                  key={index}
                  // Position block absolutely, its position is controlled by x, y transforms
                  className="absolute w-64 h-40 bg-slate-400 rounded-2xl flex items-center justify-center text-white shadow-lg origin-center"
                  style={{
                    x, // Apply calculated x
                    y, // Apply calculated y
                    rotate: blockRotate, // Apply tangential rotation to the block
                    // Apply subtle highlighting based on scroll segment
                    opacity: highlightOpacities[index],
                    scale: highlightScales[index],
                  }}
                >
                  {/* Inner div to counter-rotate content */}
                  <motion.div style={{ rotate: contentRotate }}>
                     Block {index + 1}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div> {/* End container */}
      </div> {/* End sticky container */}
    </section> /* End main section */
  );
};

export default Platforms; 