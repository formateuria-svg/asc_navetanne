import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { MatchCard } from '../components/cards/MatchCard';
import { MATCHES, TEAMS, IMAGES } from '../data/club';

const FILTERS = [{ id: 'all', label: 'Toutes' }, ...TEAMS.map((t) => ({ id: t.id, label: t.short }))];

export function Calendar() {
  const [filter, setFilter] = useState('all');

  const upcoming = useMemo(
    () =>
    MATCHES.filter((m) => m.status === 'upcoming' && (filter === 'all' || m.team === filter)).sort((a, b) =>
    a.date.localeCompare(b.date)
    ),
    [filter]
  );

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Agenda"
        title="Calendrier"
        subtitle="Retrouvez tous les prochains matchs du club, filtrés par équipe. N'oubliez jamais un rendez-vous."
        image={IMAGES.hero}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Calendrier' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) =>
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
            filter === f.id ? 'bg-teranga-green text-white' : 'bg-teranga-sand text-teranga-ink hover:bg-teranga-ink/10'}`
            }>
            
              {f.label}
            </button>
          )}
        </div>

        {upcoming.length > 0 ?
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((m, i) =>
          <Reveal key={m.id} delay={i * 0.04}>
                <MatchCard match={m} />
              </Reveal>
          )}
          </div> :

        <div className="rounded-2xl border border-dashed border-teranga-ink/20 p-14 text-center text-teranga-ink/50">
            Aucun match programmé pour cette sélection pour le moment.
          </div>
        }
      </section>
    </div>);

}