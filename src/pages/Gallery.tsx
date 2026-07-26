import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, Rotate3dIcon, PlaneIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { GALLERY, GALLERY_CATEGORIES, IMAGES } from '../data/club';

export function Gallery() {
  const [cat, setCat] = useState('Tous');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(() => cat === 'Tous' ? GALLERY : GALLERY.filter((g) => g.category === cat), [cat]);

  return (
    <div className="w-full">
      <PageHero
        eyebrow="En images"
        title="Galerie"
        subtitle="Matchs, entraînements, tournois, supporters et culture. Revivez les grands moments du club."
        image={IMAGES.supporters}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Galerie' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) =>
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

        <motion.div layout className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          <AnimatePresence>
            {items.map((g) =>
            <motion.button
              layout
              key={g.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setLightbox(g.src)}
              className="tg-card-hover group relative block w-full overflow-hidden rounded-2xl bg-teranga-ink">
              
                <img src={g.src} alt={g.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-teranga-ink/0 group-hover:bg-teranga-ink/40 transition" />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="rounded-full bg-teranga-yellow px-2.5 py-1 text-[10px] font-bold uppercase text-teranga-ink">{g.category}</span>
                  <p className="mt-2 font-bold text-white text-sm">{g.title}</p>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 360 / Drone banners */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-teranga-green p-8 text-white">
            <Rotate3dIcon className="h-10 w-10 text-teranga-yellow mb-4" />
            <h3 className="font-display text-2xl uppercase">Visite 360°</h3>
            <p className="mt-2 text-white/80 text-sm">Explorez le terrain et les installations du club en immersion totale.</p>
            <button className="mt-4 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase text-teranga-green hover:bg-teranga-yellow transition">Lancer la visite</button>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-teranga-ink p-8 text-white">
            <PlaneIcon className="h-10 w-10 text-teranga-yellow mb-4" />
            <h3 className="font-display text-2xl uppercase">Vues drone</h3>
            <p className="mt-2 text-white/70 text-sm">Le quartier et le terrain filmés depuis le ciel, comme jamais auparavant.</p>
            <button className="mt-4 rounded-full bg-teranga-yellow px-5 py-2.5 text-sm font-bold uppercase text-teranga-ink hover:bg-teranga-lime transition">Voir les vidéos</button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-teranga-ink/90 p-4">
          
            <button className="absolute top-5 right-5 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition" aria-label="Fermer">
              <XIcon className="h-6 w-6" />
            </button>
            <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}