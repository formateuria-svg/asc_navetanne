import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, AwardIcon, TrophyIcon } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell } from
'recharts';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { MATCHES, STANDINGS, TEAMS, IMAGES } from '../data/club';

export function Results() {
  const played = MATCHES.filter((m) => m.status === 'played').sort((a, b) => b.date.localeCompare(a.date));

  const chartData = STANDINGS.map((s) => ({
    name: s.team.replace('ASC ', ''),
    points: s.points,
    isUs: s.team === 'ASC TERANGA FC'
  }));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Sur le terrain"
        title="Résultats"
        subtitle="Scores, statistiques, buteurs et hommes du match. Toute la saison en un coup d'œil."
        image={IMAGES.news}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Résultats' }]} />
      

      {/* Results list */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="Derniers matchs" title="Comptes rendus" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {played.map((m, i) => {
            const team = TEAMS.find((t) => t.id === m.team);
            const win = m.score && m.score.us > m.score.them;
            const draw = m.score && m.score.us === m.score.them;
            return (
              <Reveal key={m.id} delay={i * 0.05}>
                <div className="tg-card-hover overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 shadow-sm hover:shadow-xl">
                  <div className="flex items-center justify-between bg-teranga-ink px-5 py-3">
                    <span className="text-xs font-semibold uppercase text-white/60">{m.competition} · {team?.short}</span>
                    <Badge color={win ? 'lime' : draw ? 'yellow' : 'dark'}>
                      {win ? 'Victoire' : draw ? 'Nul' : 'Défaite'}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teranga-green text-teranga-yellow font-display">T</div>
                        <p className="text-sm font-bold">Teranga FC</p>
                      </div>
                      <p className="font-display text-4xl text-teranga-ink">{m.score?.us}<span className="mx-2 text-teranga-ink/30">–</span>{m.score?.them}</p>
                      <div className="text-center">
                        <div className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teranga-sand font-display">{m.opponent.replace('ASC ', '').charAt(0)}</div>
                        <p className="text-sm font-bold">{m.opponent}</p>
                      </div>
                    </div>

                    {/* Possession */}
                    {typeof m.possession === 'number' &&
                    <div className="mt-5">
                        <div className="flex justify-between text-xs font-semibold text-teranga-ink/60 mb-1">
                          <span>Possession {m.possession}%</span>
                          <span>{100 - m.possession}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-teranga-sand overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.possession}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-teranga-green" />
                        </div>
                      </div>
                    }

                    <div className="mt-5 grid gap-2 text-sm">
                      <p className="text-teranga-ink/70"><span className="font-bold text-teranga-ink">Buteurs :</span> {m.scorers?.join(', ')}</p>
                      <p className="text-teranga-ink/70"><span className="font-bold text-teranga-ink">Cartons :</span> {m.cards?.yellow} jaune(s), {m.cards?.red} rouge(s)</p>
                      <p className="flex items-center gap-1.5 text-teranga-ink/70"><AwardIcon className="h-4 w-4 text-teranga-yellow" /> <span className="font-bold text-teranga-ink">Homme du match :</span> {m.motm}</p>
                    </div>

                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-teranga-yellow px-4 py-2 text-sm font-bold text-teranga-ink hover:bg-teranga-lime transition">
                      <PlayIcon className="h-4 w-4 fill-current" /> Résumé vidéo
                    </button>
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </section>

      {/* Standings + chart */}
      <section className="bg-teranga-sand py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading eyebrow="Championnat" title="Classement" />
            <div className="mt-8 overflow-hidden rounded-2xl bg-white border border-teranga-ink/10">
              <table className="w-full text-sm">
                <thead className="bg-teranga-ink text-white">
                  <tr className="text-left">
                    <th className="px-3 py-3 font-semibold">#</th>
                    <th className="px-3 py-3 font-semibold">Équipe</th>
                    <th className="px-2 py-3 text-center">J</th>
                    <th className="px-2 py-3 text-center hidden sm:table-cell">G</th>
                    <th className="px-2 py-3 text-center hidden sm:table-cell">N</th>
                    <th className="px-2 py-3 text-center hidden sm:table-cell">P</th>
                    <th className="px-2 py-3 text-center">Diff</th>
                    <th className="px-3 py-3 text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {STANDINGS.map((s, i) =>
                  <tr key={s.team} className={`border-t border-teranga-ink/5 ${s.team === 'ASC TERANGA FC' ? 'bg-teranga-yellow/20 font-bold' : ''}`}>
                      <td className="px-3 py-3">
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-xs ${i === 0 ? 'bg-teranga-green text-white' : 'bg-teranga-sand text-teranga-ink'}`}>{i + 1}</span>
                      </td>
                      <td className="px-3 py-3 flex items-center gap-1.5">{s.team === 'ASC TERANGA FC' && <TrophyIcon className="h-3.5 w-3.5 text-teranga-green" />}{s.team.replace('ASC ', '')}</td>
                      <td className="px-2 py-3 text-center">{s.played}</td>
                      <td className="px-2 py-3 text-center hidden sm:table-cell">{s.won}</td>
                      <td className="px-2 py-3 text-center hidden sm:table-cell">{s.drawn}</td>
                      <td className="px-2 py-3 text-center hidden sm:table-cell">{s.lost}</td>
                      <td className="px-2 py-3 text-center">{s.gf - s.ga > 0 ? '+' : ''}{s.gf - s.ga}</td>
                      <td className="px-3 py-3 text-center font-display text-lg text-teranga-green">{s.points}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Statistiques" title="Points par équipe" />
            <div className="mt-8 rounded-2xl bg-white border border-teranga-ink/10 p-5 h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={90} tick={{ fontSize: 12, fill: '#0A0F0D' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(11,110,79,0.06)' }} contentStyle={{ borderRadius: 12, border: '1px solid rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="points" radius={[0, 8, 8, 0]}>
                    {chartData.map((d, i) =>
                    <Cell key={i} fill={d.isUs ? '#0B6E4F' : '#FFC72C'} />
                    )}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>);

}