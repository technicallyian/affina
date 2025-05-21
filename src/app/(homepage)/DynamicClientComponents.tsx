'use client';

import dynamic from 'next/dynamic';

// Dynamically import ThreeD and LogoSlider with ssr: false
const ThreeD = dynamic(() => import('./ThreeD'), { ssr: false });
const LogoSlider = dynamic(() => import('./LogoSlider'), { ssr: false });

// This component will render both, or you can export them separately
// if they are used in different places within the Server Component.
// For this case, let's assume they are rendered together or can be.
export default function DynamicClientComponents() {
  return (
    <>
      <ThreeD />
      <LogoSlider />
    </>
  );
} 