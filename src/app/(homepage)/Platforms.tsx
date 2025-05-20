'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, MotionValue } from 'motion/react';
import Spinner from './components/Spinner';
import { Heading } from '@/components/typography';

const platformData = [
  { id: 1, icon: "/icons/Loyalty.svg", title: "White-Labeled & Managed Loyalty Programs", description: "Reward customers for completing actions across your ecosystem." },
  { id: 2, icon: "/icons/Engagement.svg", title: "Consumer Engagement Platforms", description: "Reward customers for completing actions across your ecosystem." },
  { id: 3, icon: "/icons/Merchant.svg", title: "Merchant-Funded Loyalty", description: "Reward customers everywhere they shop through 80,000+ brand offers." },
  { id: 4, icon: "/icons/Cart.svg", title: "Interactive Marketplaces", description: "Robust marketplaces/redemption centers featuring one-click redemptions, sweepstakes, and auctions." },
  { id: 5, icon: "/icons/Data.svg", title: "Data & Insights", description: "Real-time visibility into customer behavior and intent across your loyalty ecosystem." },
  { id: 6, icon: "/icons/Game.svg", title: "Gamification", description: "Gamify the customer experience and build long-term loyalty." },
];

const NUM_PLATFORMS = platformData.length;
const SCROLL_RANGE_END = 0.85;

const Platforms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], 
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const segmentWidth = SCROLL_RANGE_END / NUM_PLATFORMS;
      const currentSegment = Math.floor(latest / segmentWidth);
      const newActiveIndex = Math.min(Math.max(currentSegment, 0), NUM_PLATFORMS - 1);
      setActiveIndex(newActiveIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]); 

  return (
    <>
      <div className="max-w-5xl mx-auto mt-[20vh]">
        <Heading as="h2" className="text-center">Focused on building exceptional <span className="text-primary">Loyalty experiences</span></Heading>
      </div>
      <div ref={containerRef} className="relative h-[800vh]">
        <motion.div 
          style={{ 
            position: 'sticky', 
            top: 0,
          }}
          className="h-screen"
        >
          <div className="grid grid-cols-2 h-full items-center">
            <div className="flex flex-col justify-center items-center pl-16 h-full relative">
              {platformData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="text-center max-w-lg absolute w-full"
                  style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Heading as="h3" className="text-[3rem] mb-1 leading-tight">{item.title}</Heading>
                  <img src={item.icon} alt={item.title} className="w-[10rem] h-[10rem] mx-auto my-14" />
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <Spinner parentScrollYProgress={scrollYProgress} activeIndex={activeIndex} />
            </div>
          </div>
        </motion.div>

        <div className="w-full absolute bottom-0">
          <img src="/bgShape.svg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Platforms; 