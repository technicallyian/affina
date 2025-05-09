import { Section } from '@/components/Section';
import { Hero } from './Hero';
import LogoSlider from './LogoSlider';
import Platforms from './Platforms';
import Crowdplay from './Crowdplay';
import Rethink from './Rethink';
import WhyAffina from './WhyAffina';
import ThreeD from './ThreeD';
import Testimonials from './Testimonials';
import Loyalty from './Loyalty';

export default function Home() {
  return (
    <>
      <Section className="container mx-auto">
        <div className="absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-[80%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-99 z-0"></div>
        <Hero />
      </Section>
      <ThreeD />
      <LogoSlider />
      <Platforms />
      <Crowdplay />
      <Rethink />
      <WhyAffina />
      <Testimonials />
      <Loyalty />
    </>
  );
}
