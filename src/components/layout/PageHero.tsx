import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

type Props = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  crumbs?: {label: string;to?: string;}[];
};

export function PageHero({ title, eyebrow, subtitle, image, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-teranga-ink">
      {image ?
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" aria-hidden /> :
      null}
      <div className="tg-diagonal absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {crumbs &&
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-white/50" aria-label="Fil d'ariane">
            {crumbs.map((c, i) =>
          <span key={i} className="flex items-center gap-1.5">
                {c.to ?
            <Link to={c.to} className="hover:text-teranga-yellow transition">{c.label}</Link> :

            <span className="text-white/80">{c.label}</span>
            }
                {i < crumbs.length - 1 && <ChevronRightIcon className="h-3 w-3" />}
              </span>
          )}
          </nav>
        }
        {eyebrow &&
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-teranga-yellow">
            <span className="h-px w-8 bg-teranga-yellow" /> {eyebrow}
          </span>
        }
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-5xl uppercase text-white sm:text-7xl leading-[0.9]">
          
          {title}
        </motion.h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>}
      </div>
    </section>);

}