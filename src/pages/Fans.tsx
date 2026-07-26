import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, SendIcon, TrophyIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { FAN_WALL, PLAYERS, IMAGES } from '../data/club';

export function Fans() {
  const [posts, setPosts] = useState(FAN_WALL);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [voted, setVoted] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>(() =>
  Object.fromEntries(PLAYERS.slice(0, 4).map((p, i) => [p.id, 40 - i * 8]))
  );
  const [pollChoice, setPollChoice] = useState<string | null>(null);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const candidates = PLAYERS.slice(0, 4);

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setPosts((p) => [{ id: Date.now().toString(), name, message, time: "à l'instant" }, ...p]);
    setName('');
    setMessage('');
  };

  const vote = (id: string) => {
    if (voted) return;
    setVoted(id);
    setVotes((v) => ({ ...v, [id]: v[id] + 1 }));
  };

  const POLL = { question: 'Quel est le prochain objectif prioritaire du club ?', options: ['Monter en division', 'Construire un vrai vestiaire', 'Développer la section féminine'] };

  return (
    <div className="w-full">
      <PageHero
        eyebrow="12e homme"
        title="Espace Supporters"
        subtitle="Le club, c'est vous. Laissez un message, votez pour l'homme du match et donnez votre avis."
        image={IMAGES.supporters}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Supporters' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Fan wall */}
        <div>
          <SectionHeading eyebrow="Mur des supporters" title="Vos messages" />
          <form onSubmit={submitPost} className="mt-6 grid gap-3 rounded-2xl bg-white border border-teranga-ink/10 p-5">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre prénom" className="rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Votre message d'encouragement…" className="rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
            <button type="submit" className="justify-self-start inline-flex items-center gap-2 rounded-full bg-teranga-green px-5 py-2.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
              <SendIcon className="h-4 w-4" /> Publier
            </button>
          </form>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <AnimatePresence initial={false}>
              {posts.map((p) =>
              <motion.div layout key={p.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-teranga-sand p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teranga-green text-white font-display">{p.name.charAt(0)}</span>
                    <div>
                      <p className="font-bold text-teranga-ink text-sm">{p.name}</p>
                      <p className="text-xs text-teranga-ink/40">{p.time}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-teranga-ink/80">{p.message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Votes & poll */}
        <aside className="space-y-8">
          <div className="rounded-2xl bg-teranga-ink p-6 text-white">
            <h3 className="flex items-center gap-2 font-display text-xl uppercase"><TrophyIcon className="h-5 w-5 text-teranga-yellow" /> Joueur du match</h3>
            <p className="mt-1 text-sm text-white/60">Votez pour votre coup de cœur du dernier match.</p>
            <div className="mt-5 space-y-3">
              {candidates.map((c) => {
                const pct = Math.round(votes[c.id] / totalVotes * 100);
                return (
                  <button key={c.id} onClick={() => vote(c.id)} disabled={!!voted} className={`w-full text-left ${voted ? 'cursor-default' : 'cursor-pointer'}`}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="flex items-center gap-2">
                        <img src={c.photo} alt="" className="h-6 w-6 rounded-full object-cover" /> {c.name}
                      </span>
                      <span className="text-teranga-yellow font-bold">{voted ? `${pct}%` : ''}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div initial={false} animate={{ width: voted ? `${pct}%` : '0%' }} className={`h-full ${voted === c.id ? 'bg-teranga-yellow' : 'bg-teranga-green'}`} />
                    </div>
                  </button>);

              })}
            </div>
            {voted && <p className="mt-4 flex items-center gap-1.5 text-xs text-teranga-lime"><CheckIcon className="h-4 w-4" /> Merci pour votre vote !</p>}
          </div>

          {/* Poll */}
          <div className="rounded-2xl bg-white border border-teranga-ink/10 p-6">
            <h3 className="font-display text-xl uppercase text-teranga-ink flex items-center gap-2"><HeartIcon className="h-5 w-5 text-teranga-green" /> Sondage</h3>
            <p className="mt-1 text-sm text-teranga-ink/60">{POLL.question}</p>
            <div className="mt-4 space-y-2">
              {POLL.options.map((o) =>
              <button
                key={o}
                onClick={() => setPollChoice(o)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                pollChoice === o ? 'border-teranga-green bg-teranga-green text-white' : 'border-teranga-ink/15 hover:border-teranga-green'}`
                }>
                
                  {o}
                </button>
              )}
            </div>
            {pollChoice && <p className="mt-3 text-xs text-teranga-green font-bold">Vote enregistré : {pollChoice}</p>}
          </div>
        </aside>
      </section>
    </div>);

}