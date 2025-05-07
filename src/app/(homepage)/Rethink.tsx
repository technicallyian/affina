'use client';

import { Section } from '@/components/Section';
import { Heading, Text } from '@/components/typography';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
// import { IPhone } from './components/iPhone'; // No longer directly used here
import { BlurredSphere } from '@/components/BlurredSphere';
import { Button } from '@/components/Button';
import { DynamicIPhoneWithContent } from './components/DynamicIPhoneWithContent'; // Import the new component

export default function Rethink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

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
        
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
        <p className="text-center text-white mt-40">asdf</p>
    </div>
  </>
  );
} 