import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-teranga-ink px-4 text-center">
      <div className="tg-diagonal absolute inset-0 opacity-20" aria-hidden />
      <p className="font-display text-[8rem] leading-none text-teranga-yellow sm:text-[12rem]">404</p>
      <h1 className="font-display text-3xl uppercase text-white sm:text-4xl">Hors-jeu !</h1>
      <p className="mt-3 max-w-md text-white/60">Cette page n'existe pas ou a été déplacée. Retournons sur le terrain.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teranga-green px-6 py-3.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
        <HomeIcon className="h-4 w-4" /> Retour à l'accueil
      </Link>
    </div>);

}