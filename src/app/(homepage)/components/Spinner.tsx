'use client';

import React from 'react';
import { Property } from 'csstype';
import { motion } from 'motion/react';

const Spinner = () => {
  const NUM_CARDS = 6;
  const RADIUS = 200; // Adjust as needed for the desired circle size
  const START_ANGLE_DEGREES = 180; // Start from the left side of the circle for Card 1
  const ANGLE_STEP_DEGREES = -180 / (NUM_CARDS -1) ; // Distribute cards clockwise over a semicircle

  const cards = Array(NUM_CARDS).fill(null);
  // const { scrollYProgress } = useScroll();
  // const rotate = useTransform(scrollYProgress, [0, 1], [-90, 190]);

  const transforms = cards.map((_, index) => {
    const angleDeg = START_ANGLE_DEGREES + index * ANGLE_STEP_DEGREES;
    const angleRad = angleDeg * (Math.PI / 180);

    // Calculate position on the circle
    // Adjust X and Y if you want the semicircle to be oriented differently
    // For a semicircle starting from the right and going upwards/downwards:
    // x = RADIUS * Math.cos(angleRad)
    // y = RADIUS * Math.sin(angleRad)
    //
    // For a semicircle on the top half, starting from the right:
    // x = RADIUS * Math.cos(angleRad)
    // y = -RADIUS * Math.sin(angleRad) (negative sin for top half)

    // Let's assume we want the cards arranged in an arc, perhaps centered horizontally.
    // The center of the arc will be (0,0) relative to the spinner's container for now.
    // We might need to adjust the overall spinner positioning or the card container.

    const x = RADIUS * Math.cos(angleRad);
    const y = RADIUS * Math.sin(angleRad);

    // Cards should point outwards from the center or be parallel
    // If cards should point outwards:
    // const rotateDeg = angleDeg;
    // If cards should remain upright (0 rotation):
    // const rotateDeg = 0;
    // If cards should be tangent to the circle:
    // const rotateDeg = angleDeg + 90;
    // For bike spoke orientation (right side facing center):
    const rotateDeg = angleDeg + 180; // Ensures the card's right side (+X) points towards the center


    // The current styling in the JSX seems to expect transforms to be relative
    // to a -50% left offset.
    // The provided `width: '50rem'` on the motion.div also plays a role.
    // The `translate(X%, Y%)` syntax in the original transforms array suggests
    // percentage-based translation relative to the element's own size.
    // Let's try to maintain a similar structure but use calculated pixel values
    // for positioning and then adjust if needed.

    // For now, let's simplify and assume the transform is applied directly.
    // We can adjust the `left`, `position` and percentage-based translations later if needed.
    // The key is to get the circular arrangement first.

    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`,
      // position: 'absolute' as Property.Position, // Cards might need absolute positioning
      // left: '50%', // To center them if the parent is the reference
      // top: '50%',
    };
  });

  return (
    <motion.div
      className="grid grid-cols-1 gap-20 p-4"
      style={{ transformOrigin: 'center', width: '50rem', height: 'auto', position: 'relative' }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg shadow w-1/2 aspect-[4/3]"
          style={{
            ...transforms[index],
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '120px',
            height: '90px',
            marginLeft: '-60px',
            marginTop: '-45px',
          }}
        >
          Card {index + 1}
        </div>
      ))}
    </motion.div>
  );
};

export default Spinner; 