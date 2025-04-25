"use client"; // Required for hooks like useRef and motion components

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react"; // Import motion
import { Section } from '@/components/Section'; // Keep existing Section if needed, or replace outer tag
import { Heading } from '@/components/typography/Heading';
import ClientOnlyWrapper from '@/components/ClientOnlyWrapper'; // Import the wrapper

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
    offset: ["start end", "end start"], // Animate while the section is intersecting the viewport
  });

  // --- Restore Trigonometric Positioning ---

  const numItems = platformContent.length;
  const segment = 1 / numItems;
  const transitionOverlap = 0.05;
  const radius = 1200; // The radius of the circular path

  // 1. Master angle based on scroll (Clockwise, full rotation)
  const currentAngle = useTransform(scrollYProgress, [0, 1], [0, 360]); // Use full 360 range

  // 3. Angle-based Highlighting & Text Opacity Logic
  const inactiveOpacity = 0.8;
  const inactiveScale = 0.95;
  const highlightThreshold = 30; // Degrees within which to be fully highlighted/visible
  const fadeThreshold = 60;    // Degrees over which to fade to inactive/invisible state

  // Calculate angles for semicircle arrangement (90 to -90 degrees, top to bottom)
  const angleStep = numItems > 1 ? 180 / (numItems - 1) : 0;
  const startAngle = 90; // Start from +90 degrees (top)

  // Add an offset to rotate the entire starting layout
  const rotationOffset = 330; // Degrees to shift (Try 270 for 7 o'clock)
  const highlightTargetAngle = (0 + rotationOffset) % 360; // New target angle for highlighting

  // Horizontal shift for the wheel's center
  const horizontalOffset = 1250; // Pixels to shift right

  return (
    // Wrap the entire section in the client-only wrapper
    <ClientOnlyWrapper>
      <section ref={targetRef} className="relative h-[20000px]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div className="container mx-auto flex gap-8 relative h-full">

            {/* Left Content Area - Now driven by angle */}
            <div className="flex-1 flex flex-col justify-center items-start py-16">
              <Heading as="h2" level={2} className="text-left mb-8">
                Consumer Engagement Platforms
              </Heading>
              <div className="relative h-48 w-full">
                {/* Map over transforms derived within the right block map */}
                {platformContent.map((platform, index) => {
                  // Need to calculate angleDiff here too for text visibility
                  const baseAngle = startAngle - index * angleStep; // Reverse order: 90, 90-step, ...

                  // Calculate angle difference specifically for text visibility (target 180 degrees)
                  const angleDiffForText = useTransform(currentAngle, angle => {
                      let currentBlockAngle = (baseAngle + angle + rotationOffset) % 360; // Apply offset
                      if (currentBlockAngle < 0) currentBlockAngle += 360;
                      let diff = Math.abs(currentBlockAngle - 180); // Check distance to 180 degrees (left side)
                      if (diff > 180) diff = 360 - diff; // Use shortest distance
                      return diff;
                  });

                  // Text fades based on proximity to 180 degrees (Use sharper thresholds)
                  const textOpacity = useTransform(angleDiffForText, [0, 10, 20], [1, 1, 0], { clamp: true });

                  return (
                    <motion.div
                      key={`text-${index}`}
                      className="absolute inset-0 flex flex-col justify-center"
                      style={{ opacity: textOpacity }} // Use angle-based opacity
                    >
                      <h3 className="text-2xl font-semibold mb-2">{platform.title}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                      <button className="mt-4 px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
                        Explore Solutions
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Block Area - Angle-Based Highlighting */}
            <div className="flex-1 flex justify-center items-center relative">
              {platformContent.map((_, index) => {
                const baseAngle = startAngle - index * angleStep; // Reverse order: 90, 90-step, ...
                // Apply offset to positioning and rotation
                const x = useTransform(currentAngle, angle => horizontalOffset + radius * Math.cos((baseAngle + angle + rotationOffset) * Math.PI / 180)); // Add horizontal offset
                const y = useTransform(currentAngle, angle => radius * Math.sin((baseAngle + angle + rotationOffset) * Math.PI / 180));
                const blockRotate = useTransform(currentAngle, angle => (baseAngle + angle + rotationOffset));
                const contentRotate = useTransform(blockRotate, r => -r);

                const angleDiff = useTransform(currentAngle, angle => {
                  let currentBlockAngle = (baseAngle + angle + rotationOffset) % 360; // Apply offset
                  if (currentBlockAngle < 0) currentBlockAngle += 360;
                  let diff = Math.abs(currentBlockAngle - highlightTargetAngle); // Check distance to new target angle
                  if (diff > 180) diff = 360 - diff; // Use shortest distance
                  return diff;
                });

                // Block highlight opacity/scale based on angle
                const highlightOpacity = useTransform(angleDiff, [0, highlightThreshold, fadeThreshold], [1, 1, inactiveOpacity], { clamp: true });
                const highlightScale = useTransform(angleDiff, [0, highlightThreshold, fadeThreshold], [1, 1, inactiveScale], { clamp: true });

                return (
                  <motion.div
                    key={`block-${index}`}
                    className="absolute w-[800px] h-[550px] bg-slate-400 rounded-2xl flex items-center justify-center text-white shadow-lg origin-center"
                    style={{
                      x, y, rotate: blockRotate,
                      opacity: highlightOpacity,
                      scale: highlightScale,
                    }}
                  >
                    <motion.div style={{ rotate: contentRotate }}>
                       Block {index + 1}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </ClientOnlyWrapper>
  );
};

export default Platforms; 