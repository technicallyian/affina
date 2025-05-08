'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
// import { IPhone } from './components/iPhone'; // No longer directly used here
import { BlurredSphere } from '@/components/BlurredSphere';
import { Button } from '@/components/Button';
import { DynamicIPhoneWithContent } from './components/DynamicIPhoneWithContent'; // Import the new component
import { AnimatedStarburst } from './AnimatedStarburst';

export default function Crowdplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // State to control starburst animation
  const [headingAnimationComplete, setHeadingAnimationComplete] = useState(false);
  const starburstContainerRef = useRef<HTMLDivElement>(null); // Ref for starburst container
  const isStarburstInView = useInView(starburstContainerRef, { once: false, amount: 0.1 }); // Detect if starburst container is in view

  // Parallax effect: Move slower than scroll, staying static initially
  const y = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '-50%', '-50%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 2]);
  // const contentOpacity = useTransform(scrollYProgress, [0, 0.28, 0.3], [0, 0, 1]);

  const contentBoxes = [
    {
      id: 'lorem1',
      content: (
        <Text as="p" className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      ),
      positionStyles: {
        top: '100px',
        left: '-100px',
        transform: 'translate(-50%, -60%)',
        width: '280px',
      },
      className: "bg-white rounded-lg p-4 text-black shadow-xl backdrop-blur-md",
      motionProps: {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 0.5 } // Delay is now handled by DynamicIPhoneWithContent
      }
    },
    {
      id: 'lorem2',
      content: (
        <Text as="p" className="text-xs text-gray-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </Text>
      ),
      positionStyles: {
        top: '15%',
        right: '5%',
        transform: 'translateY(-50%)',
        width: '200px',
      },
      className: "bg-white rounded-lg p-3 text-black shadow-lg backdrop-blur-sm",
      motionProps: {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.6 },
        transition: { duration: 0.5 } 
      }
    },
    {
      id: 'lorem3',
      content: (
        <Text as="p" className="text-sm text-gray-700">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </Text>
      ),
      positionStyles: {
        bottom: '10%',
        left: '5%',
        width: '240px',
      },
      className: "bg-white rounded-lg p-4 text-black shadow-xl backdrop-blur-md",
      motionProps: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.4 },
        transition: { duration: 0.5 } // Delay is now handled by DynamicIPhoneWithContent
      }
    },
    {
      id: 'lorem4',
      content: (
        <Text as="p" className="text-xs text-gray-600">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
        </Text>
      ),
      positionStyles: {
        top: '70%',
        left: 'calc(50% + 40px)',
        transform: 'translate(-50%, -50%)',
        width: '220px',
      },
      className: "bg-white rounded-md p-3 text-black shadow-lg backdrop-blur-sm",
      motionProps: {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 0.5 } // Delay is now handled by DynamicIPhoneWithContent
      }
    }
  ];

  return (
    <>

    <div className="bg-primary-dark text-white pt-[100px] pb-[600px] relative">
        
      {/*<div className="flex justify-center items-center gap-[100px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
          className="bg-white relative z-50"
          style={{
            width: 'calc(100vw - 100px)',
            height: 'calc((100vw - 100px) * 0.75)',
            minWidth: '100px',
            minHeight: '75px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <div
          className="bg-white"
          style={{
            width: 'calc(100vw - 100px)',
            height: 'calc((100vw - 100px) * 0.75)',
            minWidth: '100px',
            minHeight: '75px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
          
        <BlurredSphere 
          color="bg-accent"
          size="w-[600px] h-[600px]"
          opacity="opacity-40"
          blur="blur-[100px]"
          position="absolute -bottom-[15%] right-[25%]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
        />
      </div>*/}
        
      <Section className="max-w-5xl mx-auto py-4 relative pt-[400px]">

        <motion.div
          initial={{ opacity: 0, x: 100, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", duration: 2, bounce: 0.05 }}
          style={{ willChange: 'transform, opacity, filter', transform: 'translateZ(0)' }}
          onAnimationComplete={() => setHeadingAnimationComplete(true)}
          className="relative z-10"
        >
          <Heading as="h2" level={1} className="text-center text-white relative z-10">Two Unique Platforms</Heading>
        </motion.div>
        <div ref={starburstContainerRef} className="absolute top-0 -left-[400px] w-full h-full">
          <AnimatedStarburst
            className="w-[800px] h-[800px] absolute top-0 left-0 z-0"
            startAnimation={headingAnimationComplete && isStarburstInView}
          />
        </div>
          
        <BlurredSphere 
          color="bg-primary"
          size="w-[500px] h-[500px]"
          opacity="opacity-60"
          blur="blur-[150px]"
          position="absolute -top-[5%] -right-[60%]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
        />
          
        <BlurredSphere 
          color="bg-primary"
          size="w-[500px] h-[500px]"
          opacity="opacity-60"
          blur="blur-[150px]"
          position="absolute -top-[5%] -left-[30%]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
          />
          
        <BlurredSphere 
          color="bg-accent"
          size="w-[400px] h-[400px]"
          opacity="opacity-60"
          blur="blur-[150px]"
          position="absolute top-[5%] -left-[10%]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
        />

        <div ref={containerRef} className="mt-96 text-center iphone-container relative h-[2000px]">
          <img src="/crowdplayLogo.svg" alt="Crowdplay Logo" className="w-[900px] mx-auto mb-[300px]"/>
          <motion.div 
            className="w-[400px] mx-auto sticky top-1/2 z-10 mt-12" 
            style={{ y, scale }}
          >
            <DynamicIPhoneWithContent
              iphoneClassName="w-full relative"
              backgroundImageUrl="/homepage/phone-bg.png"
              contentBoxes={contentBoxes}
              staggerDelaySeconds={0.15}
            />
              
            <BlurredSphere 
              color="bg-primary"
              size="w-[200%]"
              opacity="opacity-60"
              blur="blur-[100px]"
              position="absolute"
              zIndex="-z-20"
              className="bottom-0 aspect-square left-1/2"
              transform="transform -translate-x-1/2"
            />
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <Heading as="h2" level={3} className="max-w-2xl mx-auto text-white text-pretty">Consumer Engagement & Activation</Heading>
        </div>
      </Section>
      <div className="container mx-auto mt-10 flex justify-between space-x-8 items-stretch">
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">77%</Heading>
          <Text as="p" className="text-white mt-4">Daily Engagement</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">86%</Heading>
          <Text as="p" className="text-white mt-4">Weekly Engagement</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">96%</Heading>
          <Text as="p" className="text-white mt-4">Monthly Engagement</Text>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button variant="ghost" inverted>Learn More</Button>
      </div>
      
    </div>
  </>
  );
} 