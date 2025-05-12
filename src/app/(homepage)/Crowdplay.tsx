'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image'; // Import next/image
// import { IPhone } from './components/iPhone'; // No longer directly used here
import { BlurredSphere } from '@/components/BlurredSphere';
import { Button } from '@/components/Button';
import { DynamicIPhoneWithContent } from './components/DynamicIPhoneWithContent'; // Import the new component
import { AnimatedStarburst } from './AnimatedStarburst';
import { AnimatedNumber } from './components/AnimatedNumber'; // Import the new component

export default function Crowdplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // State to control starburst animation
  const starburstContainerRef = useRef<HTMLDivElement>(null); // Ref for starburst container

  // Parallax effect: Move slower than scroll, staying static initially
  const y = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '-50%', '-50%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 2]);
  // const contentOpacity = useTransform(scrollYProgress, [0, 0.28, 0.3], [0, 0, 1]);

  const contentBoxes = [
    {
      id: 'lorem1',
      content: (
        <Image src="/homepage/76ers/ticketmaster.png" alt="Sign in with Ticketmaster" width={336} height={153} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        top: '10rem',
        left: '-15rem',
        transform: 'translate(-50%, -60%)',
        width: '336px',
      },
      className: "rounded-xl shadow-xl",
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
        <Image src="/homepage/76ers/76ers-press-conference.png" alt="76ers Press Conference" width={250} height={210} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        top: '3.5rem',
        right: '-13rem',
        transform: 'translateY(-50%)',
        width: '250px',
      },
      className: "rounded-xl shadow-xl",
      motionProps: {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.6 },
        transition: { duration: 0.5 } 
      }
    },
    {
      id: 'lorem3',
      content: (
        <Image src="/homepage/76ers/scan.png" alt="Scan QR Code" width={230} height={275} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        bottom: '10rem',
        left: '-9rem',
        width: '230px',
      },
      className: "rounded-xl shadow-xl",
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
        transition: { duration: 0.5 } 
      }
    }
  ];

  return (
    <>

    <div 
      className="bg-primary-dark text-white pt-[100px] pb-[20rem] relative"
      style={{ isolation: 'isolate' as any }}
    >        
      <Section className="mx-auto py-4 relative pt-[400px]">
        <motion.div
          initial={{ opacity: 0, x: 100, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", duration: 2, bounce: 0.05 }}
          style={{ willChange: 'transform, opacity, filter', transform: 'translateZ(0)' }}
          className="relative z-10"
        >
          <Heading as="h2" level={1} className="text-center text-white relative z-10 text-[7rem]">Two Unique Platforms</Heading>
        </motion.div>
        <div ref={starburstContainerRef} className="absolute top-0 -left-[400px] w-full h-full">
          <AnimatedStarburst
            className="w-[800px] h-[800px] absolute top-0 left-0 z-0"
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

        <div ref={containerRef} className="mt-[40rem] text-center iphone-container relative h-[2000px]">
          <img src="/crowdplayLogo.svg" alt="Crowdplay Logo" className="w-[900px] mx-auto mb-[300px]"/>
          <motion.div 
            className="w-[400px] mx-auto sticky top-1/2 z-10 mt-12" 
            style={{ y, scale }}
          >
            <DynamicIPhoneWithContent
              iphoneClassName="w-full relative"
              backgroundImageUrl="/homepage/76ers/76ers.png"
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
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={77} textAfter="%" />
          </Heading>
          <Text as="p" className="text-white mt-4">Daily Engagement</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={86} textAfter="%" />
          </Heading>
          <Text as="p" className="text-white mt-4">Weekly Engagement</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={96} textAfter="%" />
          </Heading>
          <Text as="p" className="text-white mt-4">Monthly Engagement</Text>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button variant="ghost" size="large" inverted>Learn More</Button>
      </div>
      
    </div>
  </>
  );
} 