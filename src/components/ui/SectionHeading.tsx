import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = 'left', light = false, className = '' }: Props) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow &&
      <motion.span
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-teranga-green mb-3">
        
          <span className="h-px w-8 bg-teranga-yellow" />
          {eyebrow}
        </motion.span>
      }
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] ${light ? 'text-white' : 'text-teranga-ink'}`}>
        
        {title}
      </motion.h2>
    </div>);

}