import { Section } from '@/components/Section';
import { Heading } from '@/components/typography';
import { StarBackgroundIcon } from '@/components/StarBackgroundIcon';
import { BlurredSphere } from '@/components/BlurredSphere';
import { Text } from '@/components/typography';
import { Button } from '@/components/Button';

export default function WhyAffina() {
  return (
    <Section className="bg-primary-dark p-40 pb-[15rem]">
      <div className="max-w-7xl mx-auto relative flex justify-center items-center">
        <StarBackgroundIcon className="absolute z-0" />
        <div className="relative z-10 text-center">
          <Heading as="h2" level={1} className="text-white">Why <span className="text-primary">affina</span></Heading>
          <Text as="p" size="p1" className="text-white max-w-4xl mx-auto mt-10">Affina redefines loyalty by combining powerful engagement tools, seamless integrations, and merchant-funded rewards—driving real customer retention and revenue growth.</Text>
          <Button variant="ghost" size="large" className="mt-10" inverted>Learn More</Button>
        </div>
        <BlurredSphere 
          color="bg-primary"
          size="w-[500px] h-[500px]"
          opacity="opacity-40"
          blur="blur-[150px]"
          position="absolute -top-[5rem] -right-[20rem]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
        />
        <BlurredSphere 
          color="bg-primary"
          size="w-[300px] h-[300px]"
          opacity="opacity-60"
          blur="blur-[150px]"
          position="absolute -top-[5rem] left-[10rem]"
          transform="transform -translate-x-1/2 -translate-y-1/4"
          zIndex="z-0"
        />
      </div>
    </Section>
  );
} 