import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, PlusIcon, MinusIcon, Trash2Icon, CheckCircleIcon, ShoppingCartIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { PRODUCTS, SHOP_CATEGORIES, IMAGES, fmtCFA } from '../data/club';
import { useCart } from '../context/CartContext';

export function Shop() {
  const [cat, setCat] = useState('Tous');
  const [ordered, setOrdered] = useState(false);
  const { lines, add, remove, setQty, total, count, clear } = useCart();

  const items = useMemo(() => cat === 'Tous' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat), [cat]);

  const checkout = () => {
    setOrdered(true);
    clear();
    setTimeout(() => setOrdered(false), 4000);
  };

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Boutique officielle"
        title="Boutique"
        subtitle="Portez les couleurs du club. Maillots, casquettes, écharpes, bracelets, ballons et vestes officielles."
        image={IMAGES.jersey}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Boutique' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-[1fr_340px]">
        {/* Products */}
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {SHOP_CATEGORIES.map((c) =>
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

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((p, i) =>
            <Reveal key={p.id} delay={i * 0.04}>
                <div className="tg-card-hover group overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 shadow-sm hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden bg-teranga-sand">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 rounded-full bg-teranga-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase text-white">{p.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-teranga-ink leading-snug">{p.name}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="font-display text-xl text-teranga-green">{fmtCFA(p.price)}</p>
                      <button
                      onClick={() => add(p)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-teranga-yellow px-3.5 py-2 text-xs font-bold uppercase text-teranga-ink hover:bg-teranga-lime transition">
                      
                        <PlusIcon className="h-3.5 w-3.5" /> Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* Cart */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl bg-white border border-teranga-ink/10 p-6 shadow-sm">
          <h2 className="flex items-center gap-2 font-display text-2xl uppercase text-teranga-ink">
            <ShoppingBagIcon className="h-6 w-6 text-teranga-green" /> Panier
            {count > 0 && <span className="ml-auto rounded-full bg-teranga-green px-2.5 py-0.5 text-sm text-white">{count}</span>}
          </h2>

          <AnimatePresence>
            {ordered &&
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 rounded-xl bg-teranga-green p-4 text-white">
                <CheckCircleIcon className="mb-2 h-8 w-8 text-teranga-yellow" />
                <p className="font-bold">Commande confirmée !</p>
                <p className="text-sm text-white/80">Retrait au terrain ou livraison à Dakar. Merci !</p>
              </motion.div>
            }
          </AnimatePresence>

          {lines.length === 0 && !ordered ?
          <div className="mt-6 rounded-xl border border-dashed border-teranga-ink/20 p-8 text-center text-sm text-teranga-ink/50">
              <ShoppingCartIcon className="mx-auto mb-3 h-8 w-8 text-teranga-ink/30" />
              Votre panier est vide. Ajoutez des articles pour soutenir le club !
            </div> :

          <>
              <ul className="mt-5 space-y-3">
                {lines.map((l) =>
              <li key={l.product.id} className="flex items-center gap-3">
                    <img src={l.product.image} alt={l.product.name} className="h-14 w-14 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-teranga-ink">{l.product.name}</p>
                      <p className="text-xs text-teranga-ink/50">{fmtCFA(l.product.price)}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setQty(l.product.id, l.qty - 1)} className="rounded-md bg-teranga-sand p-1 hover:bg-teranga-ink/10" aria-label="Moins"><MinusIcon className="h-3.5 w-3.5" /></button>
                      <span className="w-5 text-center text-sm font-bold">{l.qty}</span>
                      <button onClick={() => setQty(l.product.id, l.qty + 1)} className="rounded-md bg-teranga-sand p-1 hover:bg-teranga-ink/10" aria-label="Plus"><PlusIcon className="h-3.5 w-3.5" /></button>
                    </div>
                    <button onClick={() => remove(l.product.id)} className="text-teranga-ink/40 hover:text-red-500 transition" aria-label="Supprimer"><Trash2Icon className="h-4 w-4" /></button>
                  </li>
              )}
              </ul>
              <div className="mt-5 border-t border-teranga-ink/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-teranga-ink/60">Total</span>
                  <span className="font-display text-2xl text-teranga-green">{fmtCFA(total)}</span>
                </div>
                <button onClick={checkout} className="mt-4 w-full rounded-full bg-teranga-green py-3.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
                  Commander
                </button>
                <p className="mt-2 text-center text-[11px] text-teranga-ink/40">Paiement Wave · Orange Money · Espèces</p>
              </div>
            </>
          }
        </aside>
      </section>
    </div>);

}