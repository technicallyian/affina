//import { Section } from '@/components/Section';
import { Hero } from './Hero';
//import Platforms from './Platforms';
import Crowdplay from './Crowdplay';
import Rethink from './Rethink';
import WhyAffina from './WhyAffina';
import Testimonials from './Testimonials';
import Loyalty from './Loyalty';
import { Section } from '@/components/Section';
// Remove direct dynamic imports and original static imports for ThreeD and LogoSlider
// import dynamic from 'next/dynamic';
// const ThreeD = dynamic(() => import('./ThreeD'), { ssr: false });
// const LogoSlider = dynamic(() => import('./LogoSlider'), { ssr: false }); 

//import DynamicClientComponents from './DynamicClientComponents';
//import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Section className="container mx-auto">
        <div className="absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-[80%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-99 z-0"></div>
        <Hero />
      </Section>
      {/*<Platforms />*/} 
      <Crowdplay /> 
      <Rethink />
      <WhyAffina />
      <Testimonials />
      <Loyalty />
    </>
  );
}
