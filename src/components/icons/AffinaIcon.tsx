import React from 'react';

interface AffinaIconProps extends React.SVGProps<SVGSVGElement> {}

const AffinaIcon: React.FC<AffinaIconProps> = (props) => (
  <svg viewBox="-2 -2 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <filter id="iconGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
      </filter>
    </defs>
    <path filter="url(#iconGlow)" d="M49.3932 27.9636V23.0023C37.1299 23.0023 27.1773 13.0597 27.1773 0.786377H22.2159C22.2159 13.0497 12.2733 23.0023 0 23.0023V27.9636C12.2633 27.9636 22.2159 37.9063 22.2159 50.1796H27.1773C27.1773 37.9163 37.1199 27.9636 49.3932 27.9636Z" fill="#e3e8ef"/>
    <path d="M49.3932 27.9636V23.0023C37.1299 23.0023 27.1773 13.0597 27.1773 0.786377H22.2159C22.2159 13.0497 12.2733 23.0023 0 23.0023V27.9636C12.2633 27.9636 22.2159 37.9063 22.2159 50.1796H27.1773C27.1773 37.9163 37.1199 27.9636 49.3932 27.9636Z" fill="#e3e8ef"/>
  </svg>
);

export default AffinaIcon; 