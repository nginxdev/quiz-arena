import React from 'react';
import Svg, {
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from 'react-native-svg';

export const Logo = ({ size = 120 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    {/* Background Squircle */}
    <Rect width="512" height="512" rx="120" fill="url(#bg_gradient)" />

    {/* Subtle Inner Glow/Border */}
    <Rect
      x="10"
      y="10"
      width="492"
      height="492"
      rx="110"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="20"
    />

    {/* The 'Q' with Bolt Tail */}
    {/* Circle part */}
    <Circle
      cx="256"
      cy="236"
      r="110"
      stroke="white"
      strokeWidth="45"
      strokeLinecap="round"
    />

    {/* Lightning Bolt Tail */}
    <Path
      d="M300 280 L320 280 L290 350 L340 340 L280 440 L295 360 L245 370 L300 280 Z"
      fill="white"
      stroke="white"
      strokeWidth="10"
      strokeLinejoin="round"
    />

    {/* Glossy Overlay (top half) */}
    <Path
      d="M0 120 C0 53.7258 53.7258 0 120 0 H392 C458.274 0 512 53.7258 512 120 V256 H0 V120 Z"
      fill="white"
      fillOpacity="0.05"
    />

    <Defs>
      <LinearGradient
        id="bg_gradient"
        x1="0"
        y1="0"
        x2="512"
        y2="512"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4158D0" />
        <Stop offset="0.46" stopColor="#C850C0" />
        <Stop offset="1" stopColor="#FFCC70" />
      </LinearGradient>
    </Defs>
  </Svg>
);
