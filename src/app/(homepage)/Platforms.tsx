"use client"; // Required for hooks like useRef and motion components

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from "motion/react"; // Import motion
import { Section } from '@/components/Section'; // Keep existing Section if needed, or replace outer tag
import { Heading } from '@/components/typography/Heading';
import ClientOnlyWrapper from '@/components/ClientOnlyWrapper'; // Import the wrapper

// --- Constants ---
const NUM_ITEMS = 6;
const RADIUS = 1200; // px - radius of the circular path
const ROTATION_OFFSET_DEGREES = 120; // Degrees to shift the starting layout
const HORIZONTAL_OFFSET = 1250; // px - shift the wheel's center right
const START_ANGLE_DEGREES = 90; // Start placing items from the top (+90 deg)
const ANGLE_STEP_DEGREES = NUM_ITEMS > 1 ? 180 / (NUM_ITEMS - 1) : 0; // Degrees between items on the initial semicircle
const HIGHLIGHT_TARGET_ANGLE_DEGREES = (0 + ROTATION_OFFSET_DEGREES) % 360; // Angle where block is fully highlighted
const TEXT_TARGET_ANGLE_DEGREES = 180; // Angle where text is fully visible (left side)

// Highlighting/Fading thresholds (degrees)
const HIGHLIGHT_THRESHOLD_DEGREES = 30; // Within this angle diff, item is fully highlighted/visible
const HIGHLIGHT_FADE_THRESHOLD_DEGREES = 60; // Over this angle diff, item fades to inactive state
const TEXT_HIGHLIGHT_THRESHOLD_DEGREES = 10; // Sharper fade for text
const TEXT_FADE_THRESHOLD_DEGREES = 20;

// Inactive states
const INACTIVE_OPACITY = 0.8;
const INACTIVE_SCALE = 0.95;

// Scroll animation range
const SCROLL_START_OFFSET = "start end";
const SCROLL_END_OFFSET = "end start";
const MAX_ROTATION_DEGREES = 510.1; // Total rotation degrees over the scroll range


// --- Placeholder Data ---
interface PlatformData {
  title: string;
  description: string;
}
const platformContent: PlatformData[] = [
  { title: "Platform One", description: "Description for platform one..." },
  { title: "Platform Two", description: "Description for platform two..." },
  { title: "Platform Three", description: "Description for platform three..." },
  { title: "Platform Four", description: "Description for platform four..." },
  { title: "Platform Five", description: "Description for platform five..." },
  { title: "Platform Six", description: "Description for platform six..." },
];

// Helper to calculate shortest angle difference
const calculateAngleDiff = (current: number, target: number): number => {
    let diff = Math.abs(current - target);
    if (diff > 180) diff = 360 - diff;
    return diff;
};

// --- Sub-Components ---

interface PlatformTextItemProps {
  platform: PlatformData;
  opacity: MotionValue<number>;
}

const PlatformTextItem: React.FC<PlatformTextItemProps> = ({ platform, opacity }) => (
  <motion.div
    className="absolute inset-0 flex flex-col justify-center"
    style={{ opacity }}
  >
    <h3 className="text-2xl font-semibold mb-2">{platform.title}</h3>
    <p className="text-gray-600">{platform.description}</p>
    <button className="mt-4 px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
      Explore Solutions
    </button>
  </motion.div>
);

interface PlatformBlockItemProps {
    index: number;
    x: MotionValue<number>;
    y: MotionValue<number>;
    blockRotate: MotionValue<number>;
    contentRotate: MotionValue<number>;
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
}

const PlatformBlockItem: React.FC<PlatformBlockItemProps> = ({
    index, x, y, blockRotate, contentRotate, opacity, scale
}) => (
    <motion.div
        className="absolute w-[800px] h-[550px] bg-slate-400 rounded-2xl flex items-center justify-center text-white shadow-lg origin-center"
        style={{
            x, y, rotate: blockRotate,
            opacity: opacity,
            scale: scale,
        }}
    >
        <motion.div style={{ rotate: contentRotate }}>
            Block {index + 1}
        </motion.div>
    </motion.div>
);


// --- Main Component ---
const Platforms = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [SCROLL_START_OFFSET, SCROLL_END_OFFSET],
  });

  // Master angle driven by scroll
  const currentAngle = useTransform(scrollYProgress, [0, 0.5], [0, MAX_ROTATION_DEGREES]);

  return (
    <ClientOnlyWrapper>
      <section ref={targetRef} className="relative h-[3800px]"> {/* Adjust height based on content/animation needs */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div className="container mx-auto flex gap-8 relative h-full">

            {/* Left Content Area */}
            <div className="flex-1 flex flex-col justify-center items-start py-16">
              <Heading as="h2" level={2} className="text-left mb-8">
                Consumer Engagement Platforms
              </Heading>
              <div className="relative h-48 w-full"> {/* Adjust height as needed */}
                {platformContent.map((platform, index) => {
                  const baseAngle = START_ANGLE_DEGREES - index * ANGLE_STEP_DEGREES;

                  // Calculate angle difference for text visibility (target left side: 180 deg)
                  const angleDiffForText = useTransform(currentAngle, angle => {
                      let currentBlockAngle = (baseAngle + angle + ROTATION_OFFSET_DEGREES) % 360;
                      if (currentBlockAngle < 0) currentBlockAngle += 360;
                      return calculateAngleDiff(currentBlockAngle, TEXT_TARGET_ANGLE_DEGREES);
                  });

                  // Text fades based on proximity to target angle
                  const textOpacity = useTransform(
                      angleDiffForText,
                      [0, TEXT_HIGHLIGHT_THRESHOLD_DEGREES, TEXT_FADE_THRESHOLD_DEGREES],
                      [1, 1, 0],
                      { clamp: true }
                  );

                  return (
                    <PlatformTextItem
                      key={`text-${index}`}
                      platform={platform}
                      opacity={textOpacity}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Block Area */}
            <div className="flex-1 flex justify-center items-center relative">
              {platformContent.map((_, index) => {
                const baseAngle = START_ANGLE_DEGREES - index * ANGLE_STEP_DEGREES;

                // Calculate position and rotation based on current angle
                const currentRotatedAngleRad = useTransform(currentAngle, angle =>
                  (baseAngle + angle + ROTATION_OFFSET_DEGREES) * (Math.PI / 180)
                );
                const x = useTransform(currentRotatedAngleRad, rad => HORIZONTAL_OFFSET + RADIUS * Math.cos(rad));
                const y = useTransform(currentRotatedAngleRad, rad => RADIUS * Math.sin(rad));
                const blockRotate = useTransform(currentRotatedAngleRad, rad => rad * (180 / Math.PI)); // Convert back to degrees for CSS
                const contentRotate = useTransform(blockRotate, r => -r);

                // Calculate angle difference for block highlighting
                const angleDiffForHighlight = useTransform(currentAngle, angle => {
                    let currentBlockAngle = (baseAngle + angle + ROTATION_OFFSET_DEGREES) % 360;
                    if (currentBlockAngle < 0) currentBlockAngle += 360;
                    return calculateAngleDiff(currentBlockAngle, HIGHLIGHT_TARGET_ANGLE_DEGREES);
                });

                // Block highlight opacity/scale based on angle difference
                const highlightOpacity = useTransform(
                    angleDiffForHighlight,
                    [0, HIGHLIGHT_THRESHOLD_DEGREES, HIGHLIGHT_FADE_THRESHOLD_DEGREES],
                    [1, 1, INACTIVE_OPACITY],
                    { clamp: true }
                );
                const highlightScale = useTransform(
                    angleDiffForHighlight,
                    [0, HIGHLIGHT_THRESHOLD_DEGREES, HIGHLIGHT_FADE_THRESHOLD_DEGREES],
                    [1, 1, INACTIVE_SCALE],
                    { clamp: true }
                );

                return (
                  <PlatformBlockItem
                    key={`block-${index}`}
                    index={index}
                    x={x}
                    y={y}
                    blockRotate={blockRotate}
                    contentRotate={contentRotate}
                    opacity={highlightOpacity}
                    scale={highlightScale}
                  />
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