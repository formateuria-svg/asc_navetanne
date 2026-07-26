import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, useMotionValue, animate } from 'framer-motion';

type Props = {to: number;prefix?: string;suffix?: string;duration?: number;};

export function Counter({ to, prefix = '', suffix = '', duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v))
    });
    return controls.stop;
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString('fr-FR')}
      {suffix}
    </span>);

}