import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon, ExternalLinkIcon, SendIcon, CheckCircleIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { SPONSORS, SPONSOR_PACKS, IMAGES } from '../data/club';

export function Sponsors() {
  const [pack, setPack] = useState('Or');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Partenaires"
        title="Sponsors"
        subtitle="Nos partenaires font grandir le club. Rejoignez-les et donnez de la visibilité à votre marque auprès de milliers de supporters."
        image={IMAGES.supporters}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Sponsors' }]} />
      

      {/* Sponsor cards */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="Ils nous font confiance" title="Nos partenaires" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPONSORS.map((s, i) =>
          <Reveal key={s.id} delay={i * 0.05}>
              <div className="tg-card-hover h-full rounded-2xl bg-white border border-teranga-ink/10 p-6 shadow-sm hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl font-display text-2xl" style={{ backgroundColor: s.color, color: s.color === '#FFC72C' ? '#0A0F0D' : '#fff' }}>
                    {s.name.charAt(0)}
                  </span>
                  <Badge color="yellow">{s.tier}</Badge>
                </div>
                <h3 className="mt-4 font-display text-xl uppercase text-teranga-ink">{s.name}</h3>
                <p className="mt-1.5 text-sm text-teranga-ink/60">{s.desc}</p>
                <a href={s.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-teranga-green hover:gap-2.5 transition-all">
                  Visiter le site <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Packs */}
      <section className="bg-teranga-ink py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Devenir sponsor" title="Nos formules" light />
          <p className="mt-4 max-w-2xl text-white/60">Quatre packs pour tous les budgets, avec une visibilité croissante sur le site, le maillot, les banderoles et nos réseaux sociaux.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SPONSOR_PACKS.map((p, i) =>
            <Reveal key={p.name} delay={i * 0.05}>
                <div className={`relative flex h-full flex-col rounded-2xl border p-6 ${p.highlight ? 'border-teranga-yellow bg-teranga-coal scale-[1.02]' : 'border-white/10 bg-teranga-coal'}`}>
                  {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teranga-yellow px-3 py-1 text-[11px] font-bold uppercase text-teranga-ink">Populaire</span>}
                  <span className="inline-block h-3 w-12 rounded-full" style={{ backgroundColor: p.color }} />
                  <h3 className="mt-4 font-display text-3xl uppercase text-white">{p.name}</h3>
                  <p className="mt-1 text-teranga-yellow font-bold">{p.price}</p>
                  <ul className="mt-5 space-y-3 flex-1">
                    {p.features.map((f) =>
                  <li key={f.label} className={`flex items-center gap-2 text-sm ${f.included ? 'text-white' : 'text-white/30'}`}>
                        {f.included ? <CheckIcon className="h-4 w-4 text-teranga-lime shrink-0" /> : <XIcon className="h-4 w-4 shrink-0" />}
                        {f.label}
                      </li>
                  )}
                  </ul>
                  <button
                  onClick={() => {setPack(p.name);document.getElementById('sponsor-form')?.scrollIntoView({ behavior: 'smooth' });}}
                  className={`mt-6 rounded-full py-3 text-sm font-bold uppercase transition ${p.highlight ? 'bg-teranga-yellow text-teranga-ink hover:bg-teranga-lime' : 'bg-white/10 text-white hover:bg-teranga-green'}`}>
                  
                    Choisir {p.name}
                  </button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="sponsor-form" className="mx-auto max-w-3xl px-4 py-16">
        <SectionHeading align="center" eyebrow="Contact partenariat" title="Devenez partenaire" className="mb-8" />
        {sent ?
        <div className="rounded-2xl bg-teranga-green p-10 text-center text-white">
            <CheckCircleIcon className="mx-auto mb-4 h-14 w-14 text-teranga-yellow" />
            <h3 className="font-display text-2xl uppercase">Demande envoyée !</h3>
            <p className="mt-2 text-white/80">Merci de votre intérêt. Notre responsable partenariats vous recontactera sous 48h.</p>
          </div> :

        <form onSubmit={submit} className="rounded-2xl bg-white border border-teranga-ink/10 p-6 sm:p-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Entreprise" required />
              <Field label="Personne de contact" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" type="email" required />
              <Field label="Téléphone" type="tel" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">Formule souhaitée</label>
              <select value={pack} onChange={(e) => setPack(e.target.value)} className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green">
                {SPONSOR_PACKS.map((p) => <option key={p.name}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">Message</label>
              <textarea rows={4} className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" placeholder="Parlez-nous de votre projet…" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-teranga-green py-3.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
              <SendIcon className="h-4 w-4" /> Envoyer la demande
            </button>
          </form>
        }
      </section>
    </div>);

}

function Field({ label, type = 'text', required = false }: {label: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">{label}{required && <span className="text-teranga-green"> *</span>}</label>
      <input type={type} required={required} className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
    </div>);

}