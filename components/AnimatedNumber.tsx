'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  plus?: boolean;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = "", plus = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + (plus ? "+" : "") + suffix
  );

  const [display, setDisplay] = useState("0" + (plus ? "+" : "") + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setDisplay(latest));
  }, [displayValue]);

  return <span ref={ref}>{display}</span>;
};
