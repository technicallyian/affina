'use client';

import React from 'react';
import { motion } from 'motion/react';

export const StarBackgroundIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 0.15, y: 0 },
  };

  const yDuration = 0.6;
  const opacityDuration = 0.5;
  const opacityDelayOffset = 0.1;

  // Helper function to generate transition props for each path
  const getPathTransition = (staggerDelay: number) => ({
    y: { duration: yDuration, delay: staggerDelay },
    opacity: { duration: opacityDuration, delay: staggerDelay + opacityDelayOffset },
  });

  return (
    <svg viewBox="0 0 1384 528" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0)}
        d="M132.064 143.896C132.598 203.744 181.026 252.123 240.826 252.656V274.961C180.978 275.495 132.598 323.923 132.064 383.723H109.761C109.227 323.875 60.7988 275.495 0.999023 274.961V252.656C60.8469 252.123 109.227 203.696 109.761 143.896H132.064Z"
        fill="url(#paint0_radial_1884_30434)"
        stroke="url(#paint1_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.1)}
        d="M274.961 0.999023C275.495 60.8469 323.923 109.226 383.723 109.76V132.064C323.875 132.598 275.495 181.026 274.961 240.826H252.657C252.124 180.978 203.696 132.598 143.896 132.064V109.76C203.744 109.226 252.124 60.7989 252.657 0.999023H274.961Z"
        fill="url(#paint2_radial_1884_30434)"
        stroke="url(#paint3_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.2)}
        d="M274.961 286.393C275.495 346.24 323.923 394.62 383.723 395.153V417.458C323.875 417.992 275.494 466.42 274.961 526.22H252.657C252.124 466.372 203.695 417.991 143.896 417.458V395.153C203.743 394.62 252.124 346.192 252.657 286.393H274.961Z"
        fill="url(#paint4_radial_1884_30434)"
        stroke="url(#paint5_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.3)}
        d="M845.549 0.999023C846.082 60.8469 894.511 109.226 954.311 109.76V132.064C894.463 132.598 846.082 181.026 845.549 240.826H823.245C822.711 180.978 774.283 132.598 714.483 132.064V109.76C774.331 109.226 822.712 60.7989 823.245 0.999023H845.549Z"
        fill="url(#paint6_radial_1884_30434)"
        stroke="url(#paint7_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.4)}
        d="M845.549 286.793C846.082 346.641 894.511 395.02 954.311 395.554V417.858C894.463 418.392 846.082 466.82 845.549 526.62H823.245C822.711 466.772 774.283 418.392 714.483 417.858V395.554C774.331 395.02 822.712 346.593 823.245 286.793H845.549Z"
        fill="url(#paint8_radial_1884_30434)"
        stroke="url(#paint9_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.5)}
        d="M417.857 143.896C418.391 203.744 466.819 252.123 526.619 252.656V274.961C466.771 275.495 418.391 323.923 417.857 383.723H395.554C395.02 323.875 346.592 275.495 286.792 274.961V252.656C346.64 252.123 395.02 203.696 395.554 143.896H417.857Z"
        fill="url(#paint10_radial_1884_30434)"
        stroke="url(#paint11_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.6)}
        d="M560.755 1.39258C561.288 61.2404 609.717 109.62 669.517 110.153V132.458C609.669 132.992 561.288 181.42 560.755 241.22H538.451C537.918 181.372 489.489 132.991 429.689 132.458V110.153C489.537 109.62 537.918 61.1924 538.451 1.39258H560.755Z"
        fill="url(#paint12_radial_1884_30434)"
        stroke="url(#paint13_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.7)}
        d="M560.754 286.793C561.287 346.641 609.716 395.02 669.516 395.554V417.858C609.668 418.392 561.287 466.82 560.754 526.62H538.45C537.917 466.772 489.488 418.392 429.688 417.858V395.554C489.536 395.02 537.917 346.593 538.45 286.793H560.754Z"
        fill="url(#paint14_radial_1884_30434)"
        stroke="url(#paint15_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.8)}
        d="M1131.34 0.999023C1131.88 60.8469 1180.3 109.226 1240.1 109.76V132.064C1180.26 132.598 1131.88 181.026 1131.34 240.826H1109.04C1108.5 180.978 1060.08 132.598 1000.28 132.064V109.76C1060.12 109.226 1108.5 60.7989 1109.04 0.999023H1131.34Z"
        fill="url(#paint16_radial_1884_30434)"
        stroke="url(#paint17_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(0.9)}
        d="M1131.34 286.793C1131.88 346.641 1180.3 395.02 1240.1 395.554V417.858C1180.26 418.392 1131.88 466.82 1131.34 526.62H1109.04C1108.51 466.772 1060.08 418.392 1000.28 417.858V395.554C1060.13 395.02 1108.51 346.593 1109.04 286.793H1131.34Z"
        fill="url(#paint18_radial_1884_30434)"
        stroke="url(#paint19_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(1.0)}
        d="M703.652 143.896C704.186 203.743 752.614 252.123 812.414 252.656V274.961C752.566 275.495 704.186 323.923 703.652 383.723H681.349C680.815 323.875 632.387 275.494 572.587 274.961V252.656C632.435 252.123 680.815 203.695 681.349 143.896H703.652Z"
        fill="url(#paint20_radial_1884_30434)"
        stroke="url(#paint21_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(1.1)}
        d="M988.445 143.896C988.979 203.743 1037.41 252.123 1097.21 252.656V274.961C1037.36 275.495 988.979 323.923 988.445 383.723H966.142C965.608 323.875 917.18 275.494 857.38 274.961V252.656C917.228 252.123 965.608 203.695 966.142 143.896H988.445Z"
        fill="url(#paint22_radial_1884_30434)"
        stroke="url(#paint23_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <motion.path
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={getPathTransition(1.2)}
        d="M1274.24 143.896C1274.77 203.744 1323.2 252.123 1383 252.656V274.961C1323.15 275.495 1274.77 323.923 1274.24 383.723H1251.94C1251.4 323.875 1202.97 275.495 1143.17 274.961V252.656C1203.02 252.123 1251.4 203.696 1251.94 143.896H1274.24Z"
        fill="url(#paint24_radial_1884_30434)"
        stroke="url(#paint25_linear_1884_30434)"
        strokeWidth="1.99856"
      />
      <defs>
        <radialGradient id="paint0_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(236.606 90.5382) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint1_linear_1884_30434" x1="-129.298" y1="90.5382" x2="602.511" y2="90.5382" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint2_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(379.503 -52.3585) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint3_linear_1884_30434" x1="13.5987" y1="-52.3585" x2="745.407" y2="-52.3585" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint4_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(379.503 233.035) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint5_linear_1884_30434" x1="13.5985" y1="233.035" x2="745.407" y2="233.035" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint6_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(950.091 -52.3585) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint7_linear_1884_30434" x1="584.186" y1="-52.3585" x2="1316" y2="-52.3585" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint8_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(950.091 233.435) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint9_linear_1884_30434" x1="584.186" y1="233.435" x2="1316" y2="233.435" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint10_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(522.399 90.5382) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint11_linear_1884_30434" x1="156.495" y1="90.5382" x2="888.304" y2="90.5382" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint12_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(665.297 -51.965) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint13_linear_1884_30434" x1="299.392" y1="-51.965" x2="1031.2" y2="-51.965" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint14_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(665.296 233.435) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint15_linear_1884_30434" x1="299.391" y1="233.435" x2="1031.2" y2="233.435" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint16_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1235.88 -52.3585) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint17_linear_1884_30434" x1="869.98" y1="-52.3585" x2="1601.79" y2="-52.3585" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint18_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1235.88 233.435) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint19_linear_1884_30434" x1="869.98" y1="233.435" x2="1601.79" y2="233.435" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint20_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(808.194 90.538) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint21_linear_1884_30434" x1="442.29" y1="90.538" x2="1174.1" y2="90.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint22_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1092.99 90.538) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint23_linear_1884_30434" x1="727.083" y1="90.538" x2="1458.89" y2="90.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
        <radialGradient id="paint24_radial_1884_30434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1378.78 90.5382) scale(365.904)">
          <stop offset="0.08" stopColor="#0C004B"/>
          <stop offset="0.97" stopColor="#259EE5"/>
        </radialGradient>
        <linearGradient id="paint25_linear_1884_30434" x1="1012.88" y1="90.5382" x2="1744.69" y2="90.5382" gradientUnits="userSpaceOnUse">
          <stop stopColor="#259EE5" stopOpacity="0"/>
          <stop offset="0.485" stopColor="#259EE5"/>
        </linearGradient>
      </defs>
    </svg>
  );
}; 