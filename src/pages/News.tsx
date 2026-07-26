import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { ARTICLES, ARTICLE_CATEGORIES, IMAGES } from '../data/club';

export function News() {
  const [cat, setCat] = useState('Tous');
  const list = useMemo(() => cat === 'Tous' ? ARTICLES : ARTICLES.filter((a) => a.category === cat), [cat]);

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Le fil du club"
        title="Actualités"
        subtitle="Articles, interviews, mercato, tournois et communiqués. Toute la vie du club au quotidien."
        image={IMAGES.news}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Actualités' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {ARTICLE_CATEGORIES.map((c) =>
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
            cat === c ? 'bg-teranga-green text-white' : 'bg-teranga-sand text-teranga-ink hover:bg-teranga-ink/10'}`
            }>
            
              {c}
            </button>
          )}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map((a, i) =>
            <motion.div layout key={a.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.04 }}>
                <Link to={`/actualite/${a.slug}`} className="tg-card-hover group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 shadow-sm hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3"><Badge color="yellow">{a.category}</Badge></span>
                    {a.hasVideo &&
                  <span className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teranga-yellow/90 text-teranga-ink group-hover:scale-110 transition"><PlayIcon className="h-5 w-5 fill-current" /></span>
                      </span>
                  }
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl uppercase text-teranga-ink leading-tight group-hover:text-teranga-green transition">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-teranga-ink/60 line-clamp-2">{a.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-teranga-ink/50">
                      <span className="flex items-center gap-1.5"><ClockIcon className="h-3.5 w-3.5" /> {a.readingTime}</span>
                      <span className="flex items-center gap-1 font-bold text-teranga-green">Lire <ArrowRightIcon className="h-3.5 w-3.5" /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>);

}