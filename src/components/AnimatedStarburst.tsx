'use client';

import { motion } from 'motion/react';

const starburstPaths = [
  "M489.178 0.703125C489.448 221.617 668.537 400.527 889.271 400.797V489.149C668.357 489.42 489.447 668.51 489.178 889.244H400.823C400.554 668.33 221.465 489.419 0.730469 489.149V400.797C221.644 400.527 400.553 221.437 400.823 0.703125H489.178Z",
  "M372.686 4.40676C430.123 217.723 649.415 344.185 862.698 287.316L885.565 372.658C672.249 430.096 545.787 649.389 602.657 862.671L517.313 885.539C459.876 672.223 240.584 545.76 27.3011 602.629L4.43379 517.287C217.75 459.85 344.211 240.557 287.342 27.2746L372.686 4.40676Z",
  "M261.124 38.1508C371.815 229.333 616.366 294.729 807.662 184.596L851.838 261.111C660.656 371.802 595.261 616.354 705.395 807.65L628.878 851.827C518.187 660.645 273.636 595.248 82.3398 705.381L38.1635 628.866C229.345 518.175 294.74 273.624 184.607 82.328L261.124 38.1508Z",
  "M162.091 99.6156C318.492 255.634 571.635 255.508 727.909 99.6163L790.383 162.091C634.365 318.491 634.493 571.636 790.385 727.909L727.909 790.385C571.508 634.366 318.364 634.492 162.091 790.384L99.6161 727.909C255.635 571.509 255.507 318.365 99.6154 162.092L162.091 99.6156Z",
  "M82.3383 184.608C273.79 294.831 518.275 229.19 628.876 38.1644L705.392 82.3407C595.169 273.792 660.811 518.278 851.837 628.879L807.66 705.396C616.208 595.172 371.722 660.813 261.122 851.839L184.606 807.663C294.829 616.211 229.187 371.726 38.161 261.125L82.3383 184.608Z",
  "M27.2994 287.345C240.755 344.261 459.921 217.579 517.312 4.43651L602.654 27.3038C545.738 240.76 672.421 459.925 885.564 517.316L862.696 602.66C649.24 545.744 430.074 672.425 372.683 885.568L287.341 862.7C344.257 649.244 217.574 430.079 4.43157 372.688L27.2994 287.345Z",
  "M0.730455 400.822C221.644 400.552 400.554 221.463 400.824 0.729534L489.177 0.729531C489.447 221.643 668.537 400.553 889.271 400.822L889.271 489.177C668.358 489.446 489.447 668.535 489.177 889.27L400.824 889.27C400.554 668.356 221.464 489.447 0.730457 489.177L0.730455 400.822Z"
];

const starburstPathData = starburstPaths.map((d, index) => ({
  d,
  strokeUrl: `url(#paint${index}_radial_1606_12643)`,
}));

const originalStrokeWidth = "1.00027";

const GradientDefinitions = () => (
  <>
    <radialGradient id="paint0_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(870.574 -192.395) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint1_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(691.108 -280.824) rotate(-15) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint2_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(494.874 -319.775) rotate(-30) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint3_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(295.238 -306.613) rotate(-45) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint4_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.809 -242.239) rotate(-60) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint5_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-60.5063 -131.033) rotate(-75) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint6_radial_1606_12643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-192.367 19.4264) rotate(-90) scale(1345.96)">
      <stop stopColor="#00CCA8" stopOpacity="0.5"/>
      <stop offset="0.97" stopColor="#1B98E0" stopOpacity="0"/>
    </radialGradient>
  </>
);

interface AnimatedStarburstProps {
  className?: string;
  strokeWidth?: string;
  isDrawing?: boolean;
  onAnimationComplete?: () => void;
}

export const AnimatedStarburst = ({
  className,
  strokeWidth,
  isDrawing = true,
  onAnimationComplete,
}: AnimatedStarburstProps) => {
  const currentStrokeWidth = strokeWidth || originalStrokeWidth;
  return (
    <motion.svg
      viewBox="0 0 890 890"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        rotate: isDrawing ? 360 : undefined,
      }}
      transition={{
        duration: 60,
        repeat: isDrawing ? Infinity : 0,
        ease: 'linear',
      }}
    >
      <defs>
        <GradientDefinitions />
      </defs>

      {starburstPathData.map((pathData, index) => (
        <motion.path
          key={`visible-${index}`}
          d={pathData.d}
          stroke={pathData.strokeUrl}
          strokeWidth={currentStrokeWidth}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isDrawing ? 1 : 0,
            opacity: isDrawing ? 1 : 0,
          }}
          transition={{
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 0.5, ease: "easeInOut" },
          }}
          onAnimationComplete={index === starburstPathData.length - 1 ? onAnimationComplete : undefined}
        />
      ))}
    </motion.svg>
  );
}; 