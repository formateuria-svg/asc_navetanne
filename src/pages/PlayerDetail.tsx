import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayIcon, RulerIcon, WeightIcon, CalendarIcon, FootprintsIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { NotFound } from './NotFound';
import { PLAYERS, TEAMS, IMAGES } from '../data/club';

export function PlayerDetail() {
  const { id } = useParams();
  const player = PLAYERS.find((p) => p.id === id);
  if (!player) return <NotFound />;
  const team = TEAMS.find((t) => t.id === player.team);

  const bio = [
  { label: 'Âge', value: `${player.age} ans`, Icon: CalendarIcon },
  { label: 'Taille', value: player.height, Icon: RulerIcon },
  { label: 'Poids', value: player.weight, Icon: WeightIcon },
  { label: 'Pied fort', value: player.foot, Icon: FootprintsIcon }];


  const stats = [
  { label: 'Matchs', value: player.stats.matches },
  { label: 'Buts', value: player.stats.goals },
  { label: 'Passes déc.', value: player.stats.assists },
  { label: 'Cartons jaunes', value: player.stats.yellow },
  { label: 'Cartons rouges', value: player.stats.red }];


  return (
    <div className="w-full">
      <PageHero
        eyebrow={`${player.position} · N°${player.number}`}
        title={player.name}
        image={player.photo}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipes', to: '/equipes' }, { label: team?.short || '', to: `/equipe/${team?.id}` }, { label: player.name }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-[380px_1fr]">
        {/* Photo & vitals */}
        <div>
          <div className="relative overflow-hidden rounded-2xl bg-teranga-ink aspect-[3/4]">
            <img src={player.photo} alt={player.name} className="h-full w-full object-cover object-top" />
            <span className="absolute top-3 right-3 font-display text-6xl text-teranga-yellow leading-none">{player.number}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {bio.map((b) =>
            <div key={b.label} className="flex items-center gap-3 rounded-xl bg-teranga-sand p-3">
                <b.Icon className="h-5 w-5 text-teranga-green" />
                <div>
                  <p className="text-[11px] uppercase text-teranga-ink/50">{b.label}</p>
                  <p className="font-bold text-teranga-ink text-sm">{b.value}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bio + stats */}
        <div>
          <SectionHeading eyebrow="Biographie" title={`N°${player.number} — ${player.position}`} />
          <p className="mt-5 text-teranga-ink/70 leading-relaxed max-w-2xl">{player.bio}</p>

          <h3 className="mt-10 font-display text-2xl uppercase text-teranga-ink">Statistiques</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) =>
            <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-2xl bg-teranga-green p-5 text-center">
                  <p className="font-display text-4xl text-teranga-yellow">{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase text-white/70">{s.label}</p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Media */}
          <h3 className="mt-10 font-display text-2xl uppercase text-teranga-ink">Photos & vidéos</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl aspect-video bg-teranga-ink cursor-pointer group">
              <img src={IMAGES.news} alt="Résumé vidéo" className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teranga-yellow text-teranga-ink group-hover:scale-110 transition">
                  <PlayIcon className="h-6 w-6 fill-current" />
                </span>
              </span>
            </div>
            <img src={player.photo} alt="" className="rounded-2xl object-cover aspect-video" />
            <img src={IMAGES.hero} alt="" className="rounded-2xl object-cover aspect-video" />
          </div>
        </div>
      </section>
    </div>);

}