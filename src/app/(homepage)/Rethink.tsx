'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BlurredSphere } from '@/components/BlurredSphere';
import { Button } from '@/components/Button';
import { DynamicIPhoneWithContent } from './components/DynamicIPhoneWithContent'; 
import { AnimatedNumber } from './components/AnimatedNumber'; 
import Image from 'next/image';

export default function Rethink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });


  const y = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '-50%', '-50%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 2]);

  const contentBoxes = [
    {
      id: 'lorem1',
      content: (
        <Image src="/homepage/fancash/green-chef.png" alt="Green Chef" width={289} height={315} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        top: '0',
        right: '-10rem',
        width: '289px',
      },
      className: "",
      motionProps: {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 0.5 }
      }
    },
    {
      id: 'lorem2',
      content: (
        <Image src="/homepage/fancash/nordstrom.png" alt="Nordstrom" width={185} height={200} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        bottom: '17.5rem',
        left: '-9.3rem',
        width: '185px',
      },
      className: "rounded-xl shadow-xl",
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
        <Image src="/homepage/fancash/claires.png" alt="Claires" width={185} height={200} className="rounded-xl shadow-xl"/>
      ),
      positionStyles: {
        bottom: '4rem',
        left: '-9.3rem',
        width: '185px',
      },
      className: "rounded-xl shadow-xl",
      motionProps: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.4 },
        transition: { duration: 0.5 } 
      }
    },
    {
      id: 'lorem4',
      content: (
        <Image src="/homepage/fancash/categories.png" alt="Categories" width={144} height={133}/>
      ),
      positionStyles: {
        bottom: '15.9rem',
        right: '-3.45rem',
        width: '144px',
      },
      className: "",
      motionProps: {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 0.5 }
      }
    }
  ];

  return (
    <>

    <div className="bg-primary-dark text-white pt-[100px] pb-[10rem] relative">
 
      <Section className="max-w-5xl mx-auto py-4 relative">
        <div ref={containerRef} className="mt-[1rem] text-center iphone-container relative h-[2000px]">
          <img src="/rethinkLogo.svg" alt="Crowdplay Logo" className="w-[900px] mx-auto mb-[300px]"/>
          <motion.div 
            className="w-[400px] mx-auto sticky top-1/2 z-10 mt-12" 
            style={{ y, scale }}
          >
            <DynamicIPhoneWithContent
              iphoneClassName="w-full relative"
              backgroundImageUrl="/homepage/fancash/fancash.png"
              contentBoxes={contentBoxes}
              staggerDelaySeconds={0.15}
            />
              
            <BlurredSphere 
              color="bg-pink"
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
          <Heading as="h2" level={3} className="max-w-2xl mx-auto text-white text-pretty">Merchant Funded Rewards & Offers</Heading>
        </div>
      </Section>
      <div className="container mx-auto mt-10 flex justify-between space-x-8 items-stretch">
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={3} textAfter="x" />
          </Heading>
          <Text as="p" className="text-white mt-4">Average Orders Made Per Year</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={4.3} textAfter="x" />
          </Heading>
          <Text as="p" className="text-white mt-4">Average Spend Per Customer</Text>
        </div>
        <div className="flex-1 text-center rounded-3xl bg-primary/5 p-14">
          <Heading as="h3" level={1} className="text-white">
            <AnimatedNumber targetNumber={29} textAfter="%" />
          </Heading>
          <Text as="p" className="text-white mt-4">Increase Average SpendPer Order</Text>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button variant="ghost" size="large" inverted>Explore Platform</Button>
      </div>
    </div>
  </>
  );
} 