import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, UserIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { TEAMS, IMAGES } from '../data/club';

export function Teams() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Effectifs"
        title="Nos Équipes"
        subtitle="Chaque équipe a son histoire, son coach et son effectif. Découvrez celles et ceux qui font vibrer le club."
        image={IMAGES.teamSenior}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipes' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 sm:grid-cols-2">
        {TEAMS.map((t, i) =>
        <Reveal key={t.id} delay={i * 0.05}>
            <Link to={`/equipe/${t.id}`} className="tg-card-hover group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-teranga-ink">
              <img src={t.photo} alt={t.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="tg-scrim absolute inset-0" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-block rounded-full bg-teranga-yellow px-3 py-1 text-[11px] font-bold uppercase text-teranga-ink">{t.category}</span>
                <h2 className="mt-3 font-display text-3xl uppercase text-white leading-none sm:text-4xl">{t.name}</h2>
                <p className="mt-2 max-w-md text-sm text-white/70">{t.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/70">
                  <span className="flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5 text-teranga-yellow" /> Coach : {t.coach}</span>
                  <span className="flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5 text-teranga-yellow" /> Capitaine : {t.captain}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teranga-yellow">
                  Voir l'équipe <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}
      </section>
    </div>);

}