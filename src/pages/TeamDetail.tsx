import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserIcon, ShieldIcon, StarIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PlayerCard } from '../components/cards/PlayerCard';
import { NotFound } from './NotFound';
import { TEAMS, PLAYERS } from '../data/club';

export function TeamDetail() {
  const { id } = useParams();
  const team = TEAMS.find((t) => t.id === id);
  if (!team) return <NotFound />;
  const roster = PLAYERS.filter((p) => p.team === team.id);

  const cards = [
  { label: 'Coach', value: team.coach, Icon: UserIcon },
  { label: 'Adjoint', value: team.assistant, Icon: ShieldIcon },
  { label: 'Capitaine', value: team.captain, Icon: StarIcon }];


  return (
    <div className="w-full">
      <PageHero
        eyebrow={team.category}
        title={team.name}
        subtitle={team.desc}
        image={team.photo}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipes', to: '/equipes' }, { label: team.short }]} />
      

      {/* Official photo + staff */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img src={team.photo} alt={`Photo officielle ${team.name}`} className="w-full rounded-2xl object-cover aspect-[16/9]" />
          <p className="mt-3 text-sm text-teranga-ink/50">Photo officielle — Saison 2026</p>
        </div>
        <div className="grid content-start gap-4">
          {cards.map((c) =>
          <div key={c.label} className="flex items-center gap-4 rounded-2xl bg-teranga-sand p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teranga-green text-teranga-yellow">
                <c.Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-teranga-ink/50">{c.label}</p>
                <p className="font-display text-xl uppercase text-teranga-ink leading-none mt-0.5">{c.value}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Roster */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <SectionHeading eyebrow="Composition" title="L'effectif" />
        {roster.length > 0 ?
        <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {roster.map((p, i) =>
          <PlayerCard key={p.id} player={p} index={i} />
          )}
          </div> :

        <div className="mt-10 rounded-2xl border border-dashed border-teranga-ink/20 p-12 text-center text-teranga-ink/50">
            L'effectif détaillé de cette section sera publié prochainement.{' '}
            <Link to="/contact" className="font-bold text-teranga-green hover:underline">Nous contacter</Link>
          </div>
        }
      </section>
    </div>);

}