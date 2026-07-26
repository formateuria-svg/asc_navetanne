import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  SendIcon,
  CheckCircleIcon } from
'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CLUB, IMAGES } from '../data/club';

export function Contact() {
  const [sent, setSent] = useState(false);
  const wa = `https://wa.me/${CLUB.whatsapp}`;

  const channels = [
  { Icon: PhoneIcon, label: 'Téléphone', value: CLUB.phone, href: `tel:${CLUB.phone}` },
  { Icon: MessageCircleIcon, label: 'WhatsApp', value: CLUB.phone, href: wa },
  { Icon: MailIcon, label: 'Email', value: CLUB.email, href: `mailto:${CLUB.email}` },
  { Icon: MapPinIcon, label: 'Adresse', value: CLUB.neighborhood, href: '#map' }];


  return (
    <div className="w-full">
      <PageHero
        eyebrow="Restons en contact"
        title="Contact"
        subtitle="Une question, une envie de nous rejoindre ou de nous soutenir ? Écrivez-nous, nous répondons vite."
        image={IMAGES.hero}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]} />
      

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-2">
        {/* Channels + form */}
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) =>
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="tg-card-hover flex items-center gap-4 rounded-2xl bg-white border border-teranga-ink/10 p-5 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teranga-green text-teranga-yellow"><c.Icon className="h-6 w-6" /></span>
                <div>
                  <p className="text-xs uppercase text-teranga-ink/50">{c.label}</p>
                  <p className="font-bold text-teranga-ink text-sm">{c.value}</p>
                </div>
              </a>
            )}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a href={CLUB.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 rounded-xl bg-teranga-ink text-white hover:bg-teranga-green transition"><FacebookIcon className="h-5 w-5" /></a>
            <a href={CLUB.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 rounded-xl bg-teranga-ink text-white hover:bg-teranga-green transition"><InstagramIcon className="h-5 w-5" /></a>
            <a href={CLUB.socials.tiktok} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-teranga-ink text-white hover:bg-teranga-green transition font-bold text-sm">TikTok</a>
            <a href={CLUB.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-3 rounded-xl bg-teranga-ink text-white hover:bg-teranga-green transition"><YoutubeIcon className="h-5 w-5" /></a>
          </div>

          <div className="mt-8">
            <SectionHeading eyebrow="Écrivez-nous" title="Formulaire" />
            {sent ?
            <div className="mt-6 rounded-2xl bg-teranga-green p-8 text-center text-white">
                <CheckCircleIcon className="mx-auto mb-3 h-12 w-12 text-teranga-yellow" />
                <p className="font-display text-xl uppercase">Message envoyé !</p>
                <p className="mt-1 text-white/80 text-sm">Merci, nous vous répondrons rapidement.</p>
              </div> :

            <form onSubmit={(e) => {e.preventDefault();setSent(true);}} className="mt-6 grid gap-4 rounded-2xl bg-white border border-teranga-ink/10 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactField label="Nom" required />
                  <ContactField label="Email" type="email" required />
                </div>
                <ContactField label="Sujet" required />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">Message *</label>
                  <textarea rows={4} required className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-teranga-green py-3.5 text-sm font-bold uppercase text-white hover:bg-teranga-green-deep transition">
                  <SendIcon className="h-4 w-4" /> Envoyer
                </button>
              </form>
            }
          </div>
        </div>

        {/* Map */}
        <div id="map" className="lg:sticky lg:top-24 h-fit">
          <div className="overflow-hidden rounded-2xl border border-teranga-ink/10 shadow-sm">
            <iframe
              title="Localisation du club"
              src={CLUB.mapEmbed}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
          </div>
          <div className="mt-4 rounded-2xl bg-teranga-ink p-6 text-white">
            <p className="flex items-start gap-2 text-sm"><MapPinIcon className="h-5 w-5 text-teranga-yellow shrink-0" /> {CLUB.address}</p>
            <p className="mt-3 text-sm text-white/60">Ouvert tous les jours d'entraînement — venez nous rencontrer au terrain !</p>
          </div>
        </div>
      </section>
    </div>);

}

function ContactField({ label, type = 'text', required = false }: {label: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-teranga-ink">{label}{required && <span className="text-teranga-green"> *</span>}</label>
      <input type={type} required={required} className="w-full rounded-xl border border-teranga-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teranga-green" />
    </div>);

}