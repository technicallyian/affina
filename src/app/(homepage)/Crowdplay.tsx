'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { IPhone } from './components/iPhone';
import { BlurredSphere } from '@/components/BlurredSphere';
import { Button } from '@/components/Button';
export default function Crowdplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Parallax effect: Move slower than scroll, staying static initially
  const y = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '-50%', '-50%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 2]);

  const floatOpacityEarly = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [0, 0, 1, 1]);

  const y1 = useTransform(scrollYProgress, [0.1, 1], ['250px', '-800px']);
  const y2 = useTransform(scrollYProgress, [0.1, 1], ['0px', '200px']);
  const y3 = useTransform(scrollYProgress, [0.1, 1], ['0px', '-1400px']); 
  const y4 = useTransform(scrollYProgress, [0.1, 1], ['0', '0']);


  return (
    <>
    <div className="bg-primary-dark h-screen overflow-hidden relative -mb-[20vh]">
      <div className="flex justify-center items-center gap-[100px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="bg-white relative z-50"
          style={{
            width: 'calc(100vw - 100px)',
            height: 'calc((100vw - 100px) * 0.75)',
            minWidth: '100px',
            minHeight: '75px',
            borderRadius: '50%',
          }}
        />
        <div
          className="bg-white relative z-10"
          style={{
            width: 'calc(100vw - 100px)',
            height: 'calc((100vw - 100px) * 0.75)',
            minWidth: '100px',
            minHeight: '75px',
            borderRadius: '50%',
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
      </div>
    </div>

    <div className="bg-primary-dark text-white pt-[100px] pb-[600px]">
      <Section className="max-w-5xl mx-auto py-4 relative">

        <Heading as="h2" level={2} className="text-center text-white relative z-10">Two Unique Platforms</Heading>
        <div className="absolute -top-[345px] -left-[400px] w-full h-full">
          <img src="/starburst.svg" alt="Starburst" className="w-[800px] h-[800px] absolute top-0 left-0 z-0"/>
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
          <motion.div
            className="absolute top-[40%] left-[250px] w-40 p-4 bg-gray-200 rounded-lg shadow-lg z-20 text-gray-800 text-sm" // Position relative to iphone-container now
            style={{ y: y1, opacity: floatOpacityEarly }} // Removed x: x1
          >
            This is the first floating element.
          </motion.div>
          <motion.div
            className="absolute top-[40%] right-[300px] w-32 p-3 bg-gray-200 rounded-lg shadow-lg z-20 text-gray-800 text-xs" // Position relative to iphone-container now
            style={{ y: y2, opacity: floatOpacityEarly }} // Removed x: x2
          >
            Here's another floating box.
          </motion.div>
          <motion.div
            className="absolute top-[35%] right-[220px] w-46 p-4 bg-blue-200 rounded-lg shadow-lg z-20 text-gray-800 text-sm" // Positioned above the second box
            style={{ y: y4, opacity: floatOpacityEarly }} 
          >
            This is the another floating box.
          </motion.div>
          <motion.div
            className="absolute top-[70%] left-[25%] w-40 p-5 bg-gray-200 rounded-lg shadow-lg z-20 text-gray-800 text-base" // Position relative to iphone-container now
            style={{ y: y3, opacity: floatOpacityEarly }} // Removed x: x3
          >
            A third element floats here too.
          </motion.div>

          <img src="/crowdplayLogo.svg" alt="Crowdplay Logo" className="w-[900px] mx-auto"/>
          <IPhone
            className="w-[300px] mx-auto sticky top-1/2 z-10 mt-12"
            style={{ y, scale }}
            backgroundImageUrl="/homepage/phone-bg.png"
            >
            </IPhone>
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