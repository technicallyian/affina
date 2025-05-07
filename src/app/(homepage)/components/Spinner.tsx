'use client';

import React from 'react';
import { Property } from 'csstype';

const Spinner = () => {
  const cards = Array(6).fill(null);

  const transforms = [
    { transform: 'translate(45%, -8%) rotate(30deg)', left: '-50%', position: 'relative' as Property.Position },
    { transform: 'translate(11%, -7%) rotate(14deg)', left: '-50%', position: 'relative' as Property.Position },
    { transform: 'translate(0) rotate(0)', left: '-50%', position: 'relative' as Property.Position },
    { transform: 'translate(11%, 7%) rotate(-14deg)', left: '-50%', position: 'relative' as Property.Position },
    { transform: 'translate(45%, 8%) rotate(-30deg)', left: '-50%', position: 'relative' as Property.Position },
    { transform: 'translate(105%, -8%) rotate(-48deg)', left: '-50%', position: 'relative' as Property.Position },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 p-4">
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg shadow w-1/2 aspect-[4/3]"
          style={transforms[index] || {}}
        >
          Card {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Spinner; 