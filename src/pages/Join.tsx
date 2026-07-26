import React, { useState } from 'react';
import {
  ClockIcon,
  WalletIcon,
  UsersIcon,
  FileTextIcon,
  CheckCircleIcon,
  SendIcon,
  BabyIcon } from
'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { IMAGES, fmtCFA } from '../data/club';

const AGE_GROUPS = [
{ label: 'U6 – U8', years: '6 à 8 ans', schedule: 'Mercredi 15h–16h30', price: 15000 },
{ label: 'U9 – U11', years: '9 à 11 ans', schedule: 'Mercredi & Samedi 16h–18h', price: 20000 },
{ label: 'U12 – U14', years: '12 à 14 ans', schedule: 'Samedi 9h–11h · Mercredi 17h', price: 25000 },
{ label: 'Senior / Féminine', years: '15 ans et +', schedule: 'Sur sélection — tests réguliers', price: 30000 }];


const DOCS = ['Copie extrait de naissance', 'Certificat médical de non contre-indication', '2 photos d\'identité', 'Autorisation parentale (mineurs)'];

export function Join() {
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Centre de formation"
        title="Rejoindre l'ASC"
        subtitle="Une place pour chaque talent du quartier. Inscrivez-vous à l'école de football ou passez les tests des équipes."
        image={IMAGES.academy}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Rejoindre' }]} />
      

      {/* Presentation */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <img src={IMAGES.academy} alt="École de football du club" className="rounded-2xl object-cover aspect-[4/3] w-full" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Notre école" title="Former les champions de demain" />
          <p className="mt-5 text-teranga-ink/70 leading-relaxed">
            Depuis 2010, le centre de formation de l'ASC TERANGA FC accueille les enfants du quartier et leur
            transmet bien plus que le football : la discipline, le respect et l'esprit d'équipe. Encadrés par des
            coachs diplômés, nos jeunes progressent dans un cadre sûr et bienveillant.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[{ v: '+650', l: 'Formés' }, { v: '6-14', l: 'Ans' }, { v: '3', l: 'Coachs' }].map((s) =>
            <div key={s.l} className="rounded-xl bg-teranga-sand p-4 text-center">
                <p className="font-display text-2xl text-teranga-green">{s.v}</p>
                <p className="text-xs uppercase text-teranga-ink/60">{s.l}</p>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* Age groups */}
      <section className="bg-teranga-sand py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Catégories & tarifs" title="Trouvez votre catégorie" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AGE_GROUPS.map((g, i) =>
            <Reveal key={g.label} delay={i * 0.05}>
                <div className="tg-card-hover h-full rounded-2xl bg-white border border-teranga-ink/10 p-6 shadow-sm hover:shadow-xl">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teranga-green text-teranga-yellow"><BabyIcon className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-display text-2xl uppercase text-teranga-ink">{g.label}</h3>
                  <p className="text-sm text-teranga-ink/50">{g.years}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-teranga-ink/70"><ClockIcon className="h-4 w-4 text-teranga-green" /> {g.schedule}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-bold text-teranga-ink"><WalletIcon className="h-4 w-4 text-teranga-green" /> {fmtCFA(g.price)} / an</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Docs + conditions */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Conditions" title="Documents à fournir" />
          <ul className="mt-8 space-y-3">
            {DOCS.map((d) =>
            <li key={d} className="flex items-center gap-3 rounded-xl bg-teranga-sand p-4">
                <FileTextIcon className="h-5 w-5 text-teranga-green shrink-0" />
                <span className="text-sm font-medium text-teranga-ink">{d}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Form */}
        <div>
          <SectionHeading eyebrow="Inscription en ligne" title="Formulaire" />
          {sent ?
          <div className="mt-8 rounded-2xl bg-teranga-green p-10 text-center text-white">
              <CheckCircleIcon className="mx-auto mb-4 h-14 w-14 text-teranga-yellow" />
              <h3 className="font-display text-2xl uppercase">Inscription reçue !</h3>
              <p className="mt-2 text-white/80">Bienvenue dans la famille Teranga. Un coach vous contactera pour finaliser le dossier.</p>
            </div> :

          <form onSubmit={(e) => {e.preventDefault();setSent(true);}} className="mt-8 grid gap-4 rounded-2xl bg-white border border-teranga-ink/10 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Nom du candidat" required />
                <FormField label="Prénom" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Date de naissance" type="date" required />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">Catégorie *</label>
                  <select required className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green">
                    {AGE_GROUPS.map((g) => <option key={g.label}>{g.label}</option>)}
                  </select>
                </div>
              </div>
              <FormField label="Nom du parent / tuteur" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Téléphone" type="tel" required />
                <FormField label="Email" type="email" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-teranga-green py-3.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
                <SendIcon className="h-4 w-4" /> Envoyer l'inscription
              </button>
            </form>
          }
        </div>
      </section>
    </div>);

}

function FormField({ label, type = 'text', required = false }: {label: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">{label}{required && <span className="text-teranga-green"> *</span>}</label>
      <input type={type} required={required} className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
    </div>);

}