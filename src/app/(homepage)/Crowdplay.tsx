'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Crowdplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Parallax effect: Move slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']); // Adjust '-50%' for desired parallax speed
  // Scaling effect: Start normal size, end larger
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 2]); // Start scaling earlier (at 50%) and end larger (2x)

  return (
    <div className="bg-primary-dark text-white py-[600px]">
      <Section className="container mx-auto py-4 relative">
        <Heading as="h2" level={2} className="text-center text-white relative z-10">Two Unique Platforms</Heading>
        <div className="absolute -top-[345px] -left-[200px] w-full h-full">
          <img src="/starburst.svg" alt="Starburst" className="w-[800px] h-[800px] absolute top-0 left-0 z-0"/>
        </div>

        <div ref={containerRef} className="mt-96 text-center iphone-container relative h-[120vh]">
          <img src="/crowdplayLogo.svg" alt="Crowdplay Logo" className="w-[900px] mx-auto"/>
          <motion.img
            src="/iPhone.svg"
            alt="iPhone displaying app screen"
            className="w-[300px] mx-auto sticky top-1/4 z-10"
            style={{ y, scale }}
          />
        </div>

        <div className="mt-20 text-center">
          <Heading as="h2" level={3} className="max-w-2xl mx-auto text-white text-pretty">Consumer Engagement & Activation</Heading>
          <Text as="p" className="max-w-lg mx-auto text-white text-pretty mt-6">Aenean ultrices fringilla leo, vitae dapibus nisl pellentesque nec. Donec nec vestibulum tellus.</Text>
        </div>

        <div className="mt-20 flex justify-between space-x-8 items-stretch">
          <div className="flex-1 text-center">
            <Heading as="h3" level={4} className="text-white">Card 1 Heading</Heading>
            <Text as="p" className="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </div>
          <div className="flex-1 text-center">
            <Heading as="h3" level={4} className="text-white">Card 2 Heading</Heading>
            <Text as="p" className="text-white mt-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </div>
          <div className="flex-1 text-center">
            <Heading as="h3" level={4} className="text-white">Card 3 Heading</Heading>
            <Text as="p" className="text-white mt-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
          </div>
        </div>
      </Section>

      
    </div>
  );
} 