'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, MotionValue, useTransform } from 'motion/react';
import Spinner from './components/Spinner';
import { Heading } from '@/components/typography';
import { Smartphone, Tablet, Laptop, Tv, Watch, Server } from 'lucide-react'; // Import icons

const platformData = [
  { id: 1, icon: Smartphone, title: "Mobile First", description: "Engage users seamlessly on any device." },
  { id: 2, icon: Tablet, title: "Tablet Optimized", description: "Rich experiences tailored for larger screens." },
  { id: 3, icon: Laptop, title: "Desktop Power", description: "Full-featured loyalty programs for web users." },
  { id: 4, icon: Tv, title: "Beyond Screens", description: "Integrating loyalty into broader digital ecosystems." },
  { id: 5, icon: Watch, title: "Wearable Ready", description: "Quick access and notifications on the go." },
  { id: 6, icon: Server, title: "Robust Backend", description: "Scalable and secure platform infrastructure." },
];

const NUM_PLATFORMS = platformData.length;
const SCROLL_RANGE_END = 0.7; // Rotation stops at 70% scroll

const Platforms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // Stick from the start of the container to the end
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const segmentWidth = SCROLL_RANGE_END / NUM_PLATFORMS;
      const currentSegment = Math.floor(latest / segmentWidth);
      const newActiveIndex = Math.min(Math.max(currentSegment, 0), NUM_PLATFORMS - 1);
      setActiveIndex(newActiveIndex);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [scrollYProgress]); // Dependency array includes scrollYProgress

  // We might need useTransform later if we want to animate based on scrollYProgress

  return (
    <>
      {/*<div className="relative -bottom-[50vh] max-w-5xl mx-auto">
        <Heading as="h2" className="text-center">Focused on building exceptional <span className="text-primary">Loyalty experiences</span></Heading>
      </div>*/}
      <div ref={containerRef} className="relative h-[800vh]"> {/* Ensure this is the scrollable container */}
        <motion.div 
          style={{ 
            position: 'sticky', 
            top: 0, // Stick to the top of the viewport
            // We can adjust 'top' if there's a header/navbar, e.g., top: 'var(--header-height)'
          }}
          className="h-screen" // The sticky element itself should probably have a defined height, e.g., screen height
        >
          <div className="grid grid-cols-2 h-full items-center">
            <div className="flex flex-col justify-center items-center pl-16 h-full relative"> {/* Use relative for absolute positioning of children */}
              {platformData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="text-center max-w-sm absolute w-full" // Use absolute positioning
                  style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }} // Center absolutely
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <item.icon className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <Heading as="h3" className="text-xl mb-1">{item.title}</Heading>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <Spinner parentScrollYProgress={scrollYProgress} />
            </div>
          </div>
        </motion.div>

        {/* This div is outside the sticky element, but within the scrollable container */}
        {/* It will appear after the 400vh scroll */}
        <div className="w-full absolute bottom-0">
          <img src="/bgShape.svg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Platforms; 