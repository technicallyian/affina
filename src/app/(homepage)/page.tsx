import { Hero } from './Hero';
import Crowdplay from './Crowdplay';
import Rethink from './Rethink';
import WhyAffina from './WhyAffina';
import Testimonials from './Testimonials';
import Loyalty from './Loyalty';
import { Section } from '@/components/Section';
import LogoSlider from './LogoSlider';
import ClientDynamicPlatforms from './ClientDynamicPlatforms';
import ConditionalThreeD from './ConditionalThreeD';

export default function Home() {
  return (
    <>
      <Section className="container mx-auto">
        <div className="absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-[80%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-99 z-0"></div>
        <Hero />
      </Section>
      <ConditionalThreeD />
      <LogoSlider />
      <ClientDynamicPlatforms /> 
      <Crowdplay /> 
      <Rethink />
      <WhyAffina />
      <Testimonials />
      <Loyalty />
    </>
  );
}
