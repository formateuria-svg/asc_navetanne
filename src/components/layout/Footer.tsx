import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MessageCircleIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SendIcon,
  CheckIcon } from
'lucide-react';
import { NAV_ITEMS, CLUB } from '../../data/club';

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3500);
  };

  const wa = `https://wa.me/${CLUB.whatsapp}`;

  return (
    <footer className="bg-teranga-ink text-white relative overflow-hidden">
      <div className="tg-diagonal absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teranga-green text-teranga-yellow font-display text-xl">T</span>
              <span className="font-display text-2xl uppercase">Teranga FC</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {CLUB.tagline} Le club sportif et culturel de {CLUB.neighborhood}, depuis {CLUB.since}.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 rounded-lg bg-white/10 hover:bg-teranga-green transition"><MessageCircleIcon className="h-4 w-4" /></a>
              <a href={CLUB.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-teranga-green transition"><FacebookIcon className="h-4 w-4" /></a>
              <a href={CLUB.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-teranga-green transition"><InstagramIcon className="h-4 w-4" /></a>
              <a href={CLUB.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-white/10 hover:bg-teranga-green transition"><YoutubeIcon className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase text-teranga-yellow mb-4">Liens rapides</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {NAV_ITEMS.map((i) =>
              <li key={i.to}>
                  <Link to={i.to} className="text-white/70 hover:text-white transition">{i.label}</Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase text-teranga-yellow mb-4">Nous trouver</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPinIcon className="h-4 w-4 mt-0.5 text-teranga-green shrink-0" /> {CLUB.address}</li>
              <li><a href={`tel:${CLUB.phone}`} className="flex items-center gap-2 hover:text-white transition"><PhoneIcon className="h-4 w-4 text-teranga-green" /> {CLUB.phone}</a></li>
              <li><a href={`mailto:${CLUB.email}`} className="flex items-center gap-2 hover:text-white transition"><MailIcon className="h-4 w-4 text-teranga-green" /> {CLUB.email}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase text-teranga-yellow mb-4">Newsletter</h3>
            <p className="text-white/60 text-sm mb-3">Résultats, matchs et actus du club, directement dans votre boîte mail.</p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="min-w-0 flex-1 rounded-lg bg-white/10 border border-white/15 px-3 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teranga-yellow" />
              
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-teranga-yellow text-teranga-ink px-3.5 py-2.5 hover:bg-teranga-lime transition"
                aria-label="S'inscrire">
                
                {sent ? <CheckIcon className="h-5 w-5" /> : <SendIcon className="h-5 w-5" />}
              </button>
            </form>
            {sent && <p className="text-teranga-yellow text-xs mt-2">Merci ! Vous êtes inscrit.</p>}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {CLUB.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <Link to="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition">Confidentialité</Link>
            <Link to="/admin" className="hover:text-white transition">Administration</Link>
          </div>
        </div>
      </div>
    </footer>);

}