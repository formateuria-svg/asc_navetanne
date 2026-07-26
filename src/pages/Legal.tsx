import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { CLUB } from '../data/club';

const CONTENT = {
  mentions: {
    title: 'Mentions légales',
    sections: [
    { h: 'Éditeur du site', p: `Le présent site est édité par l'association ${CLUB.name}, association sportive et culturelle sise à ${CLUB.address}. Contact : ${CLUB.email} — ${CLUB.phone}.` },
    { h: 'Directeur de la publication', p: "Le président de l'association, Serigne Fallou Mbacké." },
    { h: 'Hébergement', p: "Le site est hébergé par un prestataire technique garantissant la disponibilité et la sécurité des données." },
    { h: 'Propriété intellectuelle', p: "L'ensemble des contenus (textes, images, logos) est la propriété du club, sauf mention contraire. Toute reproduction est soumise à autorisation." }]

  },
  privacy: {
    title: 'Politique de confidentialité',
    sections: [
    { h: 'Collecte des données', p: "Les informations recueillies via nos formulaires (inscription, contact, partenariat) sont utilisées uniquement pour le traitement de votre demande." },
    { h: 'Utilisation', p: "Vos données ne sont jamais vendues à des tiers. Elles servent à vous recontacter et à améliorer nos services." },
    { h: 'Cookies', p: "Le site peut utiliser des cookies techniques pour mesurer l'audience et améliorer votre expérience de navigation." },
    { h: 'Vos droits', p: `Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à ${CLUB.email}.` }]

  }
};

export function Legal({ kind }: {kind: 'mentions' | 'privacy';}) {
  const data = CONTENT[kind];
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Informations légales"
        title={data.title}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: data.title }]} />
      
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        {data.sections.map((s) =>
        <div key={s.h}>
            <h2 className="font-display text-2xl uppercase text-teranga-ink">{s.h}</h2>
            <p className="mt-2 text-teranga-ink/70 leading-relaxed">{s.p}</p>
          </div>
        )}
      </section>
    </div>);

}