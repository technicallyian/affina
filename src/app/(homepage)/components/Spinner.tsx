'use client';

import React from 'react';

const Spinner = () => {
  const cards = Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg shadow w-1/3 aspect-[4/3]"
          style={index === 0 ? { transform: 'translate(45%, -8%) rotate(30deg)' } : index === 1 ? { transform: 'translate(11%, -7%) rotate(14deg)' } : {}}
        >
          Card {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Spinner; 