import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIcon,
  MapPinIcon,
  MenuIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MessageCircleIcon,
  ShoppingBagIcon } from
'lucide-react';
import { NAV_ITEMS, CLUB } from '../../data/club';
import { useCart } from '../../context/CartContext';

function Crest({ className = '' }: {className?: string;}) {
  return (
    <span className={`inline-flex items-center justify-center rounded-lg bg-teranga-green text-teranga-yellow font-display text-lg ${className}`}>
      T
    </span>);

}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const wa = `https://wa.me/${CLUB.whatsapp}`;

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-teranga-ink text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href={`tel:${CLUB.phone}`} className="flex items-center gap-1.5 hover:text-teranga-yellow transition">
              <PhoneIcon className="h-3.5 w-3.5" /> {CLUB.phone}
            </a>
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPinIcon className="h-3.5 w-3.5" /> {CLUB.neighborhood}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-teranga-yellow transition"><MessageCircleIcon className="h-4 w-4" /></a>
            <a href={CLUB.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-teranga-yellow transition"><FacebookIcon className="h-4 w-4" /></a>
            <a href={CLUB.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-teranga-yellow transition"><InstagramIcon className="h-4 w-4" /></a>
            <a href={CLUB.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-teranga-yellow transition font-bold text-[11px]">TikTok</a>
            <a href={CLUB.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-teranga-yellow transition"><YoutubeIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-teranga-cream/95 backdrop-blur shadow-lg' : 'bg-teranga-cream'}`
        }>
        
        <nav className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16 lg:h-20" aria-label="Navigation principale">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <Crest className="h-9 w-9" />
            <span className="font-display text-xl sm:text-2xl uppercase tracking-tight text-teranga-ink leading-none">
              Teranga <span className="text-teranga-green">FC</span>
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
            <li key={item.to}>
                <NavLink
                to={item.to}
                className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive ? 'text-teranga-green' : 'text-teranga-ink/70 hover:text-teranga-ink'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {item.label}
                      {isActive &&
                  <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-teranga-yellow" />
                  }
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/boutique" className="relative p-2 rounded-lg hover:bg-teranga-sand transition" aria-label="Panier">
              <ShoppingBagIcon className="h-5 w-5 text-teranga-ink" />
              {count > 0 &&
              <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-teranga-green text-white text-[10px] font-bold flex items-center justify-center">
                  {count}
                </span>
              }
            </Link>
            <Link
              to="/rejoindre"
              className="hidden sm:inline-flex items-center rounded-full bg-teranga-green px-5 py-2.5 text-sm font-bold text-white uppercase tracking-wide hover:bg-teranga-green-deep transition">
              
              Rejoindre
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="xl:hidden p-2 rounded-lg hover:bg-teranga-sand transition"
              aria-label="Ouvrir le menu"
              aria-expanded={open}>
              
              {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden border-t border-teranga-ink/10 bg-teranga-cream">
            
              <ul className="px-4 py-3 grid grid-cols-2 gap-1">
                {NAV_ITEMS.map((item) =>
              <li key={item.to}>
                    <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-semibold uppercase ${
                  isActive ? 'bg-teranga-green text-white' : 'text-teranga-ink hover:bg-teranga-sand'}`

                  }>
                  
                      {item.label}
                    </NavLink>
                  </li>
              )}
              </ul>
            </motion.div>
          }
        </AnimatePresence>
      </header>
    </>);

}