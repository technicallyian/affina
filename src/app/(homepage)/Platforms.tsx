import React from 'react';
import { Section } from '@/components/Section';
import { Heading } from '@/components/typography/Heading';

const Platforms = () => {
  return (
    <Section className="container mx-auto mt-20">
      <Heading as="h2" level={2} className="text-center mb-8">
        Platforms Section
      </Heading>
      <p className="text-center text-gray-600">
        Content for the platforms section goes here.
      </p>
    </Section>
  );
};

export default Platforms; 