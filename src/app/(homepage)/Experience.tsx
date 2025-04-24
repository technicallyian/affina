import React from 'react';
import { Section } from '@/components/Section';
import { Heading } from '@/components/typography/Heading';
import FeatureCard from './FeatureCard';

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-white">
      <Section className="relative container mx-auto mt-20 pb-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[85%] -translate-y-[20%] w-96 h-96 bg-primary/80 rounded-full blur-3xl opacity-99 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[35%] -translate-y-[30%] w-96 h-96 bg-teal-500/80 rounded-full blur-3xl opacity-99 z-0"></div>

        <div className="relative z-10 flex items-center">
          <Heading className="mb-8 w-1/2">Focused on building exceptional experience</Heading>
          <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Customize White Label"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <FeatureCard
            title="Feature Two"
            paragraph="Sed do eiusmod tempor incididunt ut labore."
          />
          <FeatureCard
            title="Feature Three"
            paragraph="Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <FeatureCard
            title="Feature Four"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit."
          />
        </div>
      </Section>
    </div>
  );
};

export default Experience; 