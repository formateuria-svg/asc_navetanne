import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  SparklesIcon,
  TreesIcon,
  BookOpenIcon,
  MusicIcon,
  HandshakeIcon,
  QuoteIcon } from
'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { TIMELINE, STAFF, STATS, SOCIAL_ACTIONS, IMAGES, CLUB } from '../data/club';

const ICONS: Record<string, React.FC<{className?: string;}>> = {
  heart: HeartIcon,
  sparkles: SparklesIcon,
  trees: TreesIcon,
  book: BookOpenIcon,
  music: MusicIcon,
  handshake: HandshakeIcon
};

export function Club() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Depuis 2002"
        title="Le Club"
        subtitle={`${CLUB.name} — plus de 20 ans au cœur de ${CLUB.neighborhood}. Une histoire de football, de culture et de solidarité.`}
        image={IMAGES.teamSenior}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Le Club' }]} />
      

      {/* Intro + stats */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeading eyebrow="Qui sommes-nous" title="Un club né dans le quartier" />
            <div className="mt-6 space-y-4 text-teranga-ink/70 leading-relaxed">
              <p>
                Fondée en {CLUB.since}, l'ASC TERANGA FC est bien plus qu'un club de football. C'est une
                association sportive et culturelle qui rassemble tout un quartier autour de valeurs communes :
                le respect, l'effort et la teranga.
              </p>
              <p>
                Chaque année, le club participe au championnat Navétanes et fait vivre six sections : senior,
                junior, école de football, féminine, culturelle et sociale.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.slice(1).map((s) =>
              <div key={s.label} className="rounded-2xl bg-teranga-sand p-6 text-center">
                  <p className="font-display text-4xl text-teranga-green">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-teranga-ink/60">{s.label}</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-teranga-ink py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Notre histoire" title="20 ans, une même passion" light />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/15 md:left-1/2 md:-translate-x-1/2" aria-hidden />
            <div className="space-y-10">
              {TIMELINE.map((t, i) =>
              <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right md:flex-row-reverse'}`}>
                    <span className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-teranga-yellow ring-4 ring-teranga-ink md:left-0" style={{ [i % 2 === 0 ? 'left' : 'right']: undefined }} />
                    <div className={`ml-10 md:ml-0 flex-1 rounded-2xl bg-teranga-coal border border-white/10 p-5 ${i % 2 === 0 ? 'md:ml-0' : ''}`}>
                      <span className="font-display text-2xl text-teranga-yellow">{t.year}</span>
                      <h3 className="mt-1 font-bold text-white">{t.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="Staff technique & dirigeants" title="Les femmes et hommes du club" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAFF.map((m, i) =>
          <Reveal key={m.id} delay={i * 0.04}>
              <div className="tg-card-hover group h-full rounded-2xl bg-white border border-teranga-ink/10 overflow-hidden shadow-sm hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-teranga-green px-2.5 py-1 text-[10px] font-bold uppercase text-white">{m.role}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg uppercase text-teranga-ink leading-none">{m.name}</h3>
                  <p className="mt-2 text-xs text-teranga-ink/60 leading-relaxed">{m.mission}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Social / cultural life */}
      <section className="bg-teranga-sand py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Vie associative" title="Bien plus que du football" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOCIAL_ACTIONS.map((a, i) => {
              const Icon = ICONS[a.icon] || HeartIcon;
              return (
                <Reveal key={a.id} delay={i * 0.05}>
                  <div className="tg-card-hover group h-full overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 shadow-sm hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={a.photo} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teranga-green text-teranga-yellow">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl uppercase text-teranga-ink">{a.title}</h3>
                      <p className="mt-1.5 text-sm text-teranga-ink/60">{a.text}</p>
                    </div>
                  </div>
                </Reveal>);

            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden bg-teranga-green py-20">
        <div className="tg-diagonal absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <QuoteIcon className="mx-auto mb-4 h-10 w-10 text-teranga-yellow" />
          <blockquote className="font-display text-3xl uppercase text-white sm:text-4xl leading-tight">
            « Un club, c'est un quartier qui se lève ensemble, un dimanche après-midi. »
          </blockquote>
          <p className="mt-5 text-white/70">— Serigne Fallou Mbacké, Président</p>
        </div>
      </section>
    </div>);

}