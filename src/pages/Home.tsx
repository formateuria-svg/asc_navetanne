import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  PlayIcon,
  CalendarIcon,
  UsersIcon,
  TrophyIcon,
  ArrowUpRightIcon } from
'lucide-react';
import {
  IMAGES,
  HERO_VIDEO,
  STATS,
  TEAMS,
  MATCHES,
  ARTICLES,
  SPONSORS,
  CLUB } from
'../data/club';
import { Counter } from '../components/ui/Counter';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { MatchCard } from '../components/cards/MatchCard';

export function Home() {
  const nextMatches = MATCHES.filter((m) => m.status === 'upcoming').slice(0, 3);
  const lastResults = MATCHES.filter((m) => m.status === 'played').slice(0, 3);
  const featured = ARTICLES[0];
  const restNews = ARTICLES.slice(1, 4);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-teranga-ink">
        <img src={HERO_VIDEO} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-teranga-ink/45" aria-hidden />
        <div className="tg-scrim absolute inset-0" aria-hidden />
        <div className="tg-diagonal absolute inset-0 opacity-30" aria-hidden />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl">
            
            <Badge color="yellow" className="mb-5">Championnat Navétanes · {CLUB.neighborhood}</Badge>
            <h1 className="font-display text-6xl leading-[0.85] text-white sm:text-8xl lg:text-[10rem]">
              ASC<br />
              <span className="text-teranga-yellow">TERANGA</span> FC
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80 sm:text-xl">{CLUB.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/club" className="inline-flex items-center gap-2 rounded-full bg-teranga-green px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-teranga-green-deep transition">
                Découvrir le club <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/calendrier" className="inline-flex items-center gap-2 rounded-full bg-teranga-yellow px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-teranga-ink hover:bg-teranga-lime transition">
                <CalendarIcon className="h-4 w-4" /> Prochains matchs
              </Link>
              <Link to="/rejoindre" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-teranga-ink transition">
                Rejoindre l'ASC
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-white/70 text-xs">
          <span className="h-2 w-2 rounded-full bg-teranga-yellow animate-pulse" />
          Vidéo du terrain · Grand-Yoff
        </div>
      </section>

      {/* STATS */}
      <section className="bg-teranga-ink py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s, i) =>
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
                <p className="font-display text-4xl text-teranga-yellow sm:text-5xl">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{s.label}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* TEAMS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Nos équipes" title="Six familles, un seul club" />
          <Link to="/equipes" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teranga-green hover:gap-2.5 transition-all">
            Toutes les équipes <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t, i) =>
          <Reveal key={t.id} delay={i * 0.05}>
              <Link to={`/equipe/${t.id}`} className="tg-card-hover group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-teranga-ink">
                <img src={t.photo} alt={t.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="tg-scrim absolute inset-0" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teranga-ink" style={{ backgroundColor: t.accent === '#0A0F0D' ? '#FFC72C' : t.accent, color: t.accent === '#FFC72C' ? '#0A0F0D' : '#fff' }}>
                    {t.category}
                  </span>
                  <p className="mt-2 font-display text-2xl uppercase text-white leading-none">{t.name}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teranga-yellow opacity-0 group-hover:opacity-100 transition">
                    Voir l'équipe <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* NEXT MATCHES */}
      <section className="bg-teranga-sand py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Agenda" title="Les prochains matchs" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {nextMatches.map((m) =>
            <MatchCard key={m.id} match={m} />
            )}
          </div>
          <div className="mt-8">
            <Link to="/calendrier" className="inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teranga-green hover:gap-2.5 transition-all">
              Voir tout le calendrier <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LAST RESULTS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="Derniers résultats" title="Ce qu'on a fait sur le terrain" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lastResults.map((m) =>
          <MatchCard key={m.id} match={m} />
          )}
        </div>
        <div className="mt-8">
          <Link to="/resultats" className="inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teranga-green hover:gap-2.5 transition-all">
            Tous les résultats <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CULTURE / SOCIAL banner */}
      <section className="relative overflow-hidden bg-teranga-green py-20">
        <div className="tg-diagonal absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <Badge color="yellow" className="mb-4">Vie associative</Badge>
            <h2 className="font-display text-4xl uppercase text-white sm:text-5xl leading-[0.95]">
              Le club ne fait pas <span className="text-teranga-yellow">que du football</span>
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Don de sang, nettoyage du quartier, plantation d'arbres, soutien scolaire, journées culturelles… Teranga FC vit au rythme de son quartier.
            </p>
            <Link to="/club" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase text-teranga-green hover:bg-teranga-yellow transition">
              Notre engagement <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.culture} alt="Action sociale du club" className="rounded-2xl aspect-square object-cover" />
              <img src={IMAGES.academy} alt="École de football" className="rounded-2xl aspect-square object-cover mt-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Actualités" title="Les dernières nouvelles" />
          <Link to="/actualites" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teranga-green hover:gap-2.5 transition-all">
            Toutes les actus <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Link to={`/actualite/${featured.slug}`} className="tg-card-hover group relative block h-full min-h-[320px] overflow-hidden rounded-2xl bg-teranga-ink">
              <img src={featured.cover} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="tg-scrim absolute inset-0" aria-hidden />
              {featured.hasVideo &&
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-teranga-yellow px-3 py-1.5 text-xs font-bold text-teranga-ink">
                  <PlayIcon className="h-3.5 w-3.5 fill-current" /> Vidéo
                </span>
              }
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Badge color="yellow" className="mb-3">{featured.category}</Badge>
                <h3 className="font-display text-3xl uppercase text-white leading-tight">{featured.title}</h3>
                <p className="mt-2 text-white/70 line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>
          </Reveal>
          <div className="grid gap-6">
            {restNews.map((a, i) =>
            <Reveal key={a.id} delay={i * 0.05}>
                <Link to={`/actualite/${a.slug}`} className="tg-card-hover group flex gap-4 overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 p-3 hover:shadow-lg">
                  <img src={a.cover} alt={a.title} className="h-24 w-32 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 py-1">
                    <Badge color="green" className="mb-1.5">{a.category}</Badge>
                    <h3 className="font-bold text-teranga-ink leading-snug line-clamp-2 group-hover:text-teranga-green transition">{a.title}</h3>
                    <p className="mt-1 text-xs text-teranga-ink/50">{a.readingTime} de lecture</p>
                  </div>
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* SPONSORS MARQUEE */}
      <section className="border-y border-teranga-ink/10 bg-white py-14 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 mb-8 flex items-center justify-between">
          <p className="font-display text-xl uppercase text-teranga-ink">Ils soutiennent le club</p>
          <Link to="/sponsors" className="text-sm font-bold uppercase text-teranga-green hover:underline">Devenir sponsor</Link>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-4">
            {[...SPONSORS, ...SPONSORS].map((s, i) =>
            <div key={i} className="flex h-20 w-56 shrink-0 items-center justify-center gap-3 rounded-xl border border-teranga-ink/10 bg-teranga-cream px-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg font-display text-lg text-white" style={{ backgroundColor: s.color, color: s.color === '#FFC72C' ? '#0A0F0D' : '#fff' }}>
                  {s.name.charAt(0)}
                </span>
                <span className="font-bold text-teranga-ink text-sm">{s.name}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="relative overflow-hidden bg-teranga-ink py-24">
        <img src={IMAGES.supporters} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden />
        <div className="tg-diagonal absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <TrophyIcon className="mx-auto mb-5 h-12 w-12 text-teranga-yellow" />
            <h2 className="font-display text-4xl uppercase text-white sm:text-6xl leading-[0.9]">
              Prêt à porter le <span className="text-teranga-yellow">maillot</span> ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Joueur, jeune talent, bénévole ou supporter — il y a une place pour toi à l'ASC TERANGA FC.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/rejoindre" className="inline-flex items-center gap-2 rounded-full bg-teranga-yellow px-7 py-3.5 text-sm font-bold uppercase text-teranga-ink hover:bg-teranga-lime transition">
                <UsersIcon className="h-4 w-4" /> Rejoindre le club
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold uppercase text-white hover:bg-white hover:text-teranga-ink transition">
                Nous contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>);

}