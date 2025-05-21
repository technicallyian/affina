'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Platforms component with SSR turned off
const Platforms = dynamic(() => import('./Platforms'), { ssr: false });

const ClientDynamicPlatforms = () => {
  return <Platforms />;
};

export default ClientDynamicPlatforms; 