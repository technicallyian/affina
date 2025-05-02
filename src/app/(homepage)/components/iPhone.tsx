'use client';

import { motion, MotionStyle } from 'motion/react';
import { ReactNode } from 'react';

interface IPhoneProps {
  className?: string;
  style?: MotionStyle;
  children?: ReactNode;
  backgroundImageUrl?: string;
}

export function IPhone({ className, style, children, backgroundImageUrl }: IPhoneProps) {
  return (
    <motion.div className={className} style={style}>
      <div className="relative w-full h-full">
        <svg viewBox="0 0 440 886" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g filter="url(#filter0_ii_1612_12633)">
          <path fillRule="evenodd" clipRule="evenodd" d="M79.1219 34H361.84C398.485 34 428.192 63.7069 428.192 100.352V819.648C428.192 856.293 398.485 886 361.84 886H79.1219C42.4767 886 12.7698 856.293 12.7698 819.648V100.352C12.7698 63.7068 42.4766 34 79.1219 34ZM79.1219 40.7314C46.1943 40.7314 19.5012 67.4245 19.5012 100.352V819.648C19.5012 852.575 46.1943 879.269 79.1219 879.269H361.84C394.767 879.269 421.461 852.576 421.461 819.648V100.352C421.461 67.4245 394.767 40.7314 361.84 40.7314H79.1219Z" fill="#D1D2D4"/>
          </g>
          <path fillRule="evenodd" clipRule="evenodd" d="M79.1219 39.7695H361.84C395.299 39.7695 422.422 66.8932 422.422 100.352V819.648C422.422 853.106 395.299 880.23 361.84 880.23H79.122C45.6632 880.23 18.5396 853.106 18.5396 819.648V100.352C18.5396 66.8932 45.6632 39.7695 79.1219 39.7695ZM79.1219 40.7312C46.1943 40.7312 19.5012 67.4243 19.5012 100.352V819.648C19.5012 852.575 46.1943 879.268 79.122 879.268H361.84C394.767 879.268 421.461 852.575 421.461 819.648V100.352C421.461 67.4243 394.767 40.7312 361.84 40.7312H79.1219Z" fill="#3C3A3E"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M361.84 40.7314H79.1222C46.1946 40.7314 19.5015 67.4245 19.5015 100.352V819.648C19.5015 852.576 46.1946 879.269 79.1222 879.269H361.84C394.768 879.269 421.461 852.576 421.461 819.648V100.352C421.461 67.4246 394.768 40.7314 361.84 40.7314ZM32.9642 100.352C32.9642 74.8598 53.6299 54.1942 79.1222 54.1942H118.549H321.452H361.84C387.332 54.1942 407.998 74.8598 407.998 100.352V819.648C407.998 845.14 387.332 865.806 361.84 865.806H79.1222C53.6299 865.806 32.9642 845.14 32.9642 819.648V100.352Z" fill="black"/>
          <rect x="163.746" y="63.8105" width="113.472" height="32.6953" rx="16.3476" fill="black"/>
          <circle cx="261.831" cy="80.1581" r="6.73138" fill="#14161B"/>
          <circle cx="261.83" cy="80.158" r="3.8465" fill="url(#paint0_radial_1612_12633)"/>
          <circle cx="263.273" cy="81.6006" r="1.44244" fill="url(#paint1_radial_1612_12633)" fillOpacity="0.7"/>
          <circle cx="260.388" cy="78.7152" r="0.480813" fill="url(#paint2_radial_1612_12633)" fillOpacity="0.7"/>
          <g style={{ mixBlendMode: 'lighten' }} opacity="0.4">
          <rect x="94.5081" y="880.23" width="8.65463" height="5.76975" fill="#F0F0F0"/>
          <rect x="12.77" y="801.377" width="8.65463" height="5.76975" transform="rotate(-90 12.77 801.377)" fill="#F0F0F0"/>
          <rect x="12.77" y="128.239" width="8.65463" height="5.76975" transform="rotate(-90 12.77 128.239)" fill="#F0F0F0"/>
          <rect x="422.422" y="801.377" width="8.65463" height="5.76975" transform="rotate(-90 422.422 801.377)" fill="#F0F0F0"/>
          <rect x="422.422" y="128.239" width="8.65463" height="5.76975" transform="rotate(-90 422.422 128.239)" fill="#F0F0F0"/>
          <rect x="345.492" y="39.7695" width="8.65463" height="5.76975" transform="rotate(180 345.492 39.7695)" fill="#F0F0F0"/>
          </g>
          <g filter="url(#filter1_i_1612_12633)">
          <g clipPath="url(#clip0_1612_12633)">
          <rect x="8.92383" y="169.589" width="3.8465" height="31.7336" fill="#D1D2D4"/>
          <rect x="8.92407" y="191.706" width="3.8465" height="9.61625" fill="url(#paint3_linear_1612_12633)"/>
          <rect x="12.7705" y="179.205" width="3.8465" height="9.61625" transform="rotate(180 12.7705 179.205)" fill="url(#paint4_linear_1612_12633)"/>
          <rect x="8.92407" y="169.589" width="3.8465" height="9.61625" fill="url(#paint5_linear_1612_12633)" fillOpacity="0.4"/>
          <rect x="8.92407" y="191.706" width="3.8465" height="9.61625" fill="url(#paint6_linear_1612_12633)" fillOpacity="0.4"/>
          </g>
          </g>
          <g filter="url(#filter2_i_1612_12633)">
          <g clipPath="url(#clip1_1612_12633)">
          <rect x="9.88525" y="231.133" width="3.8465" height="63.4673" fill="#D1D2D4"/>
          <rect x="9.88525" y="284.983" width="3.8465" height="9.61625" fill="url(#paint7_linear_1612_12633)"/>
          <rect x="13.7319" y="240.749" width="3.8465" height="9.61625" transform="rotate(180 13.7319 240.749)" fill="url(#paint8_linear_1612_12633)"/>
          <rect x="9.88525" y="231.133" width="3.8465" height="9.61625" fill="url(#paint9_linear_1612_12633)" fillOpacity="0.4"/>
          <rect x="9.88525" y="284.983" width="3.8465" height="9.61625" fill="url(#paint10_linear_1612_12633)" fillOpacity="0.4"/>
          </g>
          </g>
          <g filter="url(#filter3_i_1612_12633)">
          <g clipPath="url(#clip2_1612_12633)">
          <rect x="9.88525" y="311.91" width="3.8465" height="63.4673" fill="#D1D2D4"/>
          <rect x="9.88525" y="365.761" width="3.8465" height="9.61625" fill="url(#paint11_linear_1612_12633)"/>
          <rect x="13.7319" y="321.526" width="3.8465" height="9.61625" transform="rotate(180 13.7319 321.526)" fill="url(#paint12_linear_1612_12633)"/>
          <rect x="9.88525" y="311.91" width="3.8465" height="9.61625" fill="url(#paint13_linear_1612_12633)" fillOpacity="0.4"/>
          <rect x="9.88525" y="365.761" width="3.8465" height="9.61625" fill="url(#paint14_linear_1612_12633)" fillOpacity="0.4"/>
          </g>
          </g>
          <g clipPath="url(#clip3_1612_12633)">
          <rect x="428.192" y="238.826" width="2.88488" height="101.932" fill="#D1D2D4"/>
          <rect x="428.193" y="331.143" width="2.88488" height="9.61625" fill="url(#paint15_linear_1612_12633)"/>
          <rect x="431.078" y="248.442" width="2.88488" height="9.61625" transform="rotate(180 431.078 248.442)" fill="url(#paint16_linear_1612_12633)"/>
          <rect x="428.193" y="238.826" width="2.88488" height="9.61625" fill="url(#paint17_linear_1612_12633)" fillOpacity="0.4"/>
          <rect x="428.193" y="331.143" width="2.88488" height="9.61625" fill="url(#paint18_linear_1612_12633)" fillOpacity="0.4"/>
          </g>
          <defs>
          <filter id="filter0_ii_1612_12633" x="12.7698" y="34" width="415.422" height="855.847" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.961625"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.588235 0 0 0 0 0.560784 0 0 0 1 0"/>
          <feBlend mode="multiply" in2="shape" result="effect1_innerShadow_1612_12633"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3.8465"/>
          <feGaussianBlur stdDeviation="1.92325"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.25 0"/>
          <feBlend mode="multiply" in2="effect1_innerShadow_1612_12633" result="effect2_innerShadow_1612_12633"/>
          </filter>
          <filter id="filter1_i_1612_12633" x="8.92334" y="169.589" width="4.32725" height="31.7334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="0.480813"/>
          <feGaussianBlur stdDeviation="0.480813"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1612_12633"/>
          </filter>
          <filter id="filter2_i_1612_12633" x="9.88525" y="231.133" width="3.36558" height="63.4668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="0.480813"/>
          <feGaussianBlur stdDeviation="0.480813"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1612_12633"/>
          </filter>
          <filter id="filter3_i_1612_12633" x="9.88525" y="311.91" width="3.36558" height="63.4668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="0.480813"/>
          <feGaussianBlur stdDeviation="0.480813"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1612_12633"/>
          </filter>
          <radialGradient id="paint0_radial_1612_12633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(261.83 80.158) rotate(180) scale(3.8465 7.33514)">
          <stop stopColor="#000010"/>
          <stop offset="0.354167" stopColor="#0A113C"/>
          <stop offset="0.71875" stopColor="#223049"/>
          <stop offset="1" stopColor="#364361"/>
          </radialGradient>
          <radialGradient id="paint1_radial_1612_12633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(263.273 81.6006) rotate(90) scale(1.44244)">
          <stop stopColor="#33557F"/>
          <stop offset="1" stopColor="#182344"/>
          </radialGradient>
          <radialGradient id="paint2_radial_1612_12633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260.388 78.7152) rotate(90) scale(0.480813)">
          <stop stopColor="#525689"/>
          <stop offset="1" stopColor="#474B7E"/>
          </radialGradient>
          <linearGradient id="paint3_linear_1612_12633" x1="10.8473" y1="191.706" x2="10.8473" y2="201.322" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint4_linear_1612_12633" x1="14.6938" y1="179.205" x2="14.6938" y2="188.821" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint5_linear_1612_12633" x1="10.8473" y1="169.589" x2="10.8473" y2="179.205" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint6_linear_1612_12633" x1="10.8473" y1="191.706" x2="10.8473" y2="201.322" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint7_linear_1612_12633" x1="11.8085" y1="284.983" x2="11.8085" y2="294.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint8_linear_1612_12633" x1="15.6552" y1="240.749" x2="15.6552" y2="250.365" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint9_linear_1612_12633" x1="11.8085" y1="231.133" x2="11.8085" y2="240.749" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint10_linear_1612_12633" x1="11.8085" y1="284.983" x2="11.8085" y2="294.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint11_linear_1612_12633" x1="11.8085" y1="365.761" x2="11.8085" y2="375.377" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint12_linear_1612_12633" x1="15.6552" y1="321.526" x2="15.6552" y2="331.143" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint13_linear_1612_12633" x1="11.8085" y1="311.91" x2="11.8085" y2="321.526" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint14_linear_1612_12633" x1="11.8085" y1="365.761" x2="11.8085" y2="375.377" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint15_linear_1612_12633" x1="429.635" y1="331.143" x2="429.635" y2="340.759" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint16_linear_1612_12633" x1="432.52" y1="248.442" x2="432.52" y2="258.059" gradientUnits="userSpaceOnUse">
          <stop stopColor="#615E5A" stopOpacity="0"/>
          <stop offset="1" stopColor="#615E5A"/>
          </linearGradient>
          <linearGradient id="paint17_linear_1612_12633" x1="429.635" y1="238.826" x2="429.635" y2="248.442" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint18_linear_1612_12633" x1="429.635" y1="331.143" x2="429.635" y2="340.759" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.479167" stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <clipPath id="clip0_1612_12633">
          <path d="M8.92334 170.55C8.92334 170.019 9.35387 169.589 9.88497 169.589H12.7698V201.323H9.88496C9.35387 201.323 8.92334 200.892 8.92334 200.361V170.55Z" fill="white"/>
          </clipPath>
          <clipPath id="clip1_1612_12633">
          <path d="M9.88525 232.094C9.88525 231.563 10.3158 231.133 10.8469 231.133H12.7701V294.6H10.8469C10.3158 294.6 9.88525 294.17 9.88525 293.638V232.094Z" fill="white"/>
          </clipPath>
          <clipPath id="clip2_1612_12633">
          <path d="M9.88525 312.872C9.88525 312.341 10.3158 311.91 10.8469 311.91H12.7701V375.377H10.8469C10.3158 375.377 9.88525 374.947 9.88525 374.416V312.872Z" fill="white"/>
          </clipPath>
          <clipPath id="clip3_1612_12633">
          <path d="M428.192 238.826H430.115C430.646 238.826 431.077 239.257 431.077 239.788V339.797C431.077 340.328 430.646 340.758 430.115 340.758H428.192V238.826Z" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <div
          className="absolute overflow-hidden -z-10"
          style={{
            top: '6.1%',
            left: '7%',
            width: '86%',
            height: '91.6%',
          }}
        >
          {backgroundImageUrl && (
            <img
              src={backgroundImageUrl}
              alt="iPhone background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="relative z-10 w-full h-full">
             {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 