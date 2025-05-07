'use client';

import React from 'react';

const Spinner = () => {
  const cards = Array(6).fill(null);

  const transforms = [
    { transform: 'translate(45%, -8%) rotate(30deg)' },
    { transform: 'translate(11%, -7%) rotate(14deg)' },
    { transform: 'translate(0) rotate(0)' },
    { transform: 'translate(11%, 7%) rotate(-14deg)' },
    { transform: 'translate(45%, 8%) rotate(-30deg)' },
    { transform: 'translate(105%, -8%) rotate(-48deg)' },
    // Add more transforms here if needed for other cards
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