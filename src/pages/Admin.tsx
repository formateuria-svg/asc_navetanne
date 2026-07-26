import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import {
  LayoutDashboardIcon,
  UsersIcon,
  CalendarIcon,
  HandshakeIcon,
  NewspaperIcon,
  ImageIcon,
  TrendingUpIcon,
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  EyeIcon } from
'lucide-react';
import { PLAYERS, MATCHES, SPONSORS, ARTICLES, TEAMS } from '../data/club';

type Tab = 'dashboard' | 'players' | 'matches' | 'sponsors' | 'articles' | 'media';

const TABS: {id: Tab;label: string;Icon: React.FC<{className?: string;}>;}[] = [
{ id: 'dashboard', label: 'Tableau de bord', Icon: LayoutDashboardIcon },
{ id: 'players', label: 'Joueurs', Icon: UsersIcon },
{ id: 'matches', label: 'Matchs', Icon: CalendarIcon },
{ id: 'sponsors', label: 'Sponsors', Icon: HandshakeIcon },
{ id: 'articles', label: 'Articles', Icon: NewspaperIcon },
{ id: 'media', label: 'Médias', Icon: ImageIcon }];


const VISITS = [
{ d: 'Lun', v: 320 }, { d: 'Mar', v: 410 }, { d: 'Mer', v: 380 },
{ d: 'Jeu', v: 520 }, { d: 'Ven', v: 610 }, { d: 'Sam', v: 940 }, { d: 'Dim', v: 1120 }];


export function Admin() {
  const [tab, setTab] = useState<Tab>('dashboard');

  return (
    <div className="w-full bg-teranga-coal min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teranga-yellow">Administration</span>
            <h1 className="font-display text-4xl uppercase text-white sm:text-5xl">Espace de gestion</h1>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-teranga-green px-4 py-2 text-sm font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-teranga-yellow animate-pulse" /> Connecté : Admin
          </span>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {TABS.map((t) =>
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            tab === t.id ? 'bg-teranga-yellow text-teranga-ink' : 'bg-white/5 text-white/70 hover:bg-white/10'}`
            }>
            
              <t.Icon className="h-4 w-4" /> {t.label}
            </button>
          )}
        </div>

        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
          {tab === 'dashboard' && <Dashboard />}
          {tab === 'players' && <CrudTable title="Joueurs" columns={['Nom', 'N°', 'Poste', 'Équipe']} rows={PLAYERS.map((p) => [p.name, `#${p.number}`, p.position, TEAMS.find((t) => t.id === p.team)?.short || ''])} />}
          {tab === 'matches' && <CrudTable title="Matchs" columns={['Date', 'Adversaire', 'Compétition', 'Statut']} rows={MATCHES.map((m) => [m.date, m.opponent, m.competition, m.status === 'played' ? `Joué ${m.score?.us}-${m.score?.them}` : 'À venir'])} />}
          {tab === 'sponsors' && <CrudTable title="Sponsors" columns={['Nom', 'Formule', 'Lien']} rows={SPONSORS.map((s) => [s.name, s.tier, s.url])} />}
          {tab === 'articles' && <CrudTable title="Articles" columns={['Titre', 'Catégorie', 'Auteur', 'Date']} rows={ARTICLES.map((a) => [a.title, a.category, a.author, a.date])} />}
          {tab === 'media' && <MediaManager />}
        </motion.div>
      </div>
    </div>);

}

function Dashboard() {
  const stats = [
  { label: 'Visites cette semaine', value: '4 300', trend: '+18%', Icon: TrendingUpIcon },
  { label: 'Joueurs actifs', value: PLAYERS.length.toString(), trend: '+2', Icon: UsersIcon },
  { label: 'Matchs à venir', value: MATCHES.filter((m) => m.status === 'upcoming').length.toString(), trend: '', Icon: CalendarIcon },
  { label: 'Sponsors', value: SPONSORS.length.toString(), trend: '+1', Icon: HandshakeIcon }];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) =>
        <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <s.Icon className="h-6 w-6 text-teranga-yellow" />
              {s.trend && <span className="text-xs font-bold text-teranga-lime">{s.trend}</span>}
            </div>
            <p className="mt-4 font-display text-3xl text-white">{s.value}</p>
            <p className="text-xs uppercase text-white/50">{s.label}</p>
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-display text-xl uppercase text-white mb-4">Statistiques de visite</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={VISITS}>
                <defs>
                  <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFC72C" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#FFC72C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="d" tick={{ fill: '#ffffff80', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#ffffff80', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, background: '#111917', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Area type="monotone" dataKey="v" stroke="#FFC72C" strokeWidth={2} fill="url(#v)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-display text-xl uppercase text-white mb-4">Buts par joueur</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PLAYERS.map((p) => ({ name: p.name.split(' ')[0], buts: p.stats.goals }))}>
                <XAxis dataKey="name" tick={{ fill: '#ffffff80', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#ffffff80', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ borderRadius: 12, background: '#111917', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Bar dataKey="buts" fill="#0B6E4F" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>);

}

function CrudTable({ title, columns, rows }: {title: string;columns: string[];rows: string[][];}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between p-5">
        <h3 className="font-display text-xl uppercase text-white">Gestion des {title.toLowerCase()}</h3>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-teranga-yellow px-4 py-2 text-sm font-bold text-teranga-ink hover:bg-teranga-lime transition">
          <PlusIcon className="h-4 w-4" /> Ajouter
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/50 uppercase text-xs">
            <tr className="text-left">
              {columns.map((c) => <th key={c} className="px-5 py-3 font-semibold">{c}</th>)}
              <th className="px-5 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) =>
            <tr key={i} className="border-t border-white/5 text-white/80 hover:bg-white/5">
                {r.map((cell, j) => <td key={j} className="px-5 py-3 truncate max-w-[200px]">{cell}</td>)}
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-lg bg-white/5 p-2 hover:bg-white/10 transition" aria-label="Voir"><EyeIcon className="h-4 w-4 text-white/70" /></button>
                    <button className="rounded-lg bg-white/5 p-2 hover:bg-teranga-green transition" aria-label="Modifier"><PencilIcon className="h-4 w-4 text-white/70" /></button>
                    <button className="rounded-lg bg-white/5 p-2 hover:bg-red-500 transition" aria-label="Supprimer"><Trash2Icon className="h-4 w-4 text-white/70" /></button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}

function MediaManager() {
  const imgs = [...new Set(ARTICLES.map((a) => a.cover).concat(PLAYERS.map((p) => p.photo)))];
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-xl uppercase text-white">Bibliothèque médias</h3>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-teranga-yellow px-4 py-2 text-sm font-bold text-teranga-ink hover:bg-teranga-lime transition"><PlusIcon className="h-4 w-4" /> Téléverser</button>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {imgs.map((src, i) =>
        <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
            <img src={src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-teranga-ink/60 opacity-0 group-hover:opacity-100 transition">
              <button className="rounded-lg bg-white/20 p-2 hover:bg-red-500 transition" aria-label="Supprimer"><Trash2Icon className="h-4 w-4 text-white" /></button>
            </div>
          </div>
        )}
      </div>
    </div>);

}