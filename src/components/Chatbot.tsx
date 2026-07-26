import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareIcon, XIcon, SendIcon, BotIcon, SparklesIcon } from 'lucide-react';
import { MATCHES } from '../data/club';

type Msg = {from: 'bot' | 'user';text: string;};

const SUGGESTIONS = [
'Comment rejoindre le club ?',
'Où se joue le prochain match ?',
'Comment devenir sponsor ?'];


function answer(q: string): string {
  const t = q.toLowerCase();
  const next = MATCHES.filter((m) => m.status === 'upcoming').sort((a, b) => a.date.localeCompare(b.date))[0];

  if (/(rejoindre|inscri|adh|jouer|integrer|intégrer)/.test(t)) {
    return "Pour rejoindre l'ASC TERANGA FC, rendez-vous sur la page « Rejoindre » : remplissez le formulaire d'inscription en ligne. L'école accueille les 6-14 ans, et des tests sont organisés pour les équipes senior, junior et féminine.";
  }
  if (/(match|prochain|jouer où|calendrier|joue)/.test(t) && next) {
    const d = new Date(next.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    return `Le prochain match est ${next.home ? 'à domicile' : "à l'extérieur"} : ASC TERANGA FC vs ${next.opponent}, le ${d} à ${next.time}, au ${next.venue} (${next.competition}). Tout le calendrier est sur la page « Calendrier ».`;
  }
  if (/(sponsor|partenaire|entreprise|visibilit)/.test(t)) {
    return "Devenir sponsor, c'est simple ! Nous proposons 4 formules : Bronze, Argent, Or et Premium, avec logo sur le site, le maillot, des banderoles et une visibilité sur nos réseaux. Détails et contact sur la page « Sponsors ».";
  }
  if (/(bonjour|salut|hello|coucou|bonsoir)/.test(t)) {
    return "Bonjour et bienvenue à l'ASC TERANGA FC ! Comment puis-je vous aider ? Vous pouvez me poser des questions sur les inscriptions, les matchs ou le sponsoring.";
  }
  if (/(boutique|maillot|acheter|prix)/.test(t)) {
    return "La boutique officielle propose maillots, casquettes, écharpes, bracelets, ballons et vestes. Rendez-vous sur la page « Boutique » pour commander.";
  }
  if (/(contact|téléphone|telephone|adresse|email|mail)/.test(t)) {
    return "Vous pouvez nous joindre via la page « Contact » : WhatsApp, téléphone, email, réseaux sociaux et notre localisation sur Google Maps.";
  }
  return "Je peux vous renseigner sur les inscriptions, le prochain match, le sponsoring, la boutique ou le contact. Essayez l'une des suggestions ci-dessous !";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
  { from: 'bot', text: "Salut ! Je suis l'assistant IA du club. Posez-moi une question 👇 (choisissez une suggestion)" }]
  );
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text: answer(text) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-teranga-green text-white pl-4 pr-5 py-3.5 shadow-2xl shadow-teranga-green/30 hover:bg-teranga-green-deep transition-transform hover:scale-105"
        aria-label="Ouvrir l'assistant IA">
        
        {open ? <XIcon className="h-5 w-5" /> : <MessageSquareIcon className="h-5 w-5" />}
        <span className="text-sm font-bold uppercase tracking-wide hidden sm:inline">{open ? 'Fermer' : 'Assistant IA'}</span>
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[520px] max-h-[70vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-teranga-ink/10 overflow-hidden">
          
            <div className="bg-teranga-ink text-white px-4 py-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teranga-green">
                <BotIcon className="h-5 w-5 text-teranga-yellow" />
              </span>
              <div>
                <p className="font-bold text-sm flex items-center gap-1.5">Assistant Teranga <SparklesIcon className="h-3.5 w-3.5 text-teranga-yellow" /></p>
                <p className="text-[11px] text-white/60">En ligne — réponses instantanées</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-teranga-cream">
              {msgs.map((m, i) =>
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.from === 'user' ?
                'bg-teranga-green text-white rounded-br-sm' :
                'bg-white text-teranga-ink border border-teranga-ink/10 rounded-bl-sm'}`
                }>
                
                    {m.text}
                  </div>
                </div>
            )}
              {typing &&
            <div className="flex justify-start">
                  <div className="bg-white border border-teranga-ink/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((d) =>
                <motion.span
                  key={d}
                  className="h-2 w-2 rounded-full bg-teranga-green"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />

                )}
                  </div>
                </div>
            }
              <div ref={endRef} />
            </div>

            <div className="px-3 pt-2 flex gap-1.5 flex-wrap bg-white border-t border-teranga-ink/10">
              {SUGGESTIONS.map((s) =>
            <button
              key={s}
              onClick={() => send(s)}
              className="text-[11px] rounded-full border border-teranga-green/30 text-teranga-green px-2.5 py-1 hover:bg-teranga-green hover:text-white transition">
              
                  {s}
                </button>
            )}
            </div>

            <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 flex gap-2 bg-white">
            
              <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message…"
              className="flex-1 rounded-full border border-teranga-ink/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
            
              <button type="submit" className="rounded-full bg-teranga-green text-white p-2.5 hover:bg-teranga-green-deep transition" aria-label="Envoyer">
                <SendIcon className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}