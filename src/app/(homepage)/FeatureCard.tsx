import React from 'react';
import { Heading, Text } from '@/components/typography';

interface FeatureCardProps {
  title?: string;
  illustration?: React.ReactNode;
  paragraph?: string;
}

const FeatureCard = ({ title, illustration, paragraph }: FeatureCardProps) => {
  return (
    <div className="p-4 rounded-3xl bg-white/30 backdrop-blur-md border-2 border-white/30">
      <div className="relative p-6 rounded-2xl flex flex-col items-center text-center bg-gradient-to-b from-[#f0f3f8] to-[#dde7f3] border-2 border-white overflow-hidden">
        <img 
          src="/texture.svg"
          alt="Background texture"
          className="absolute top-0 left-0 w-full h-auto object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center">
          <Text className="text-lg font-semibold mb-2 h-14">{title || "Feature Title"}</Text>
          <div className="w-[202px] h-[202px] mb-4 flex items-center justify-center">
            {illustration ? (
              React.isValidElement(illustration) ? illustration : <img src={String(illustration)} alt={title || "Feature Illustration"} className="w-full h-full object-contain" />
            ) : (
              <span className="text-gray-500 text-sm">Illust.</span>
            )}
          </div>
          <p className="text-sm text-center leading-snug">{paragraph || "Description of the feature goes here."}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 