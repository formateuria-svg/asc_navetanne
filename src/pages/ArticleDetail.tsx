import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon, PlayIcon, ArrowLeftIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Badge } from '../components/ui/Badge';
import { NotFound } from './NotFound';
import { ARTICLES, IMAGES } from '../data/club';

export function ArticleDetail() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);
  const date = new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="w-full">
      <PageHero
        eyebrow={article.category}
        title={article.title}
        image={article.cover}
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Actualités', to: '/actualites' }, { label: article.category }]} />
      

      <article className="mx-auto max-w-3xl px-4 py-14">
        <div className="flex flex-wrap items-center gap-4 text-sm text-teranga-ink/50 border-b border-teranga-ink/10 pb-6">
          <span className="flex items-center gap-1.5"><UserIcon className="h-4 w-4 text-teranga-green" /> {article.author}</span>
          <span className="flex items-center gap-1.5"><CalendarIcon className="h-4 w-4 text-teranga-green" /> {date}</span>
          <span className="flex items-center gap-1.5"><ClockIcon className="h-4 w-4 text-teranga-green" /> {article.readingTime}</span>
        </div>

        <img src={article.cover} alt={article.title} className="mt-8 w-full rounded-2xl object-cover aspect-video" />

        {article.hasVideo &&
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-teranga-ink aspect-video cursor-pointer group">
            <img src={IMAGES.news} alt="Résumé vidéo du match" className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teranga-yellow text-teranga-ink group-hover:scale-110 transition"><PlayIcon className="h-7 w-7 fill-current" /></span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-teranga-ink/70 px-3 py-1.5 text-xs font-bold text-white">Résumé vidéo · 2:34</span>
          </div>
        }

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-teranga-ink/80">
          <p className="font-medium text-teranga-ink">{article.excerpt}</p>
          {article.body.map((p, i) =>
          <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{p}</motion.p>
          )}
        </div>

        <Link to="/actualites" className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase text-teranga-green hover:gap-3 transition-all">
          <ArrowLeftIcon className="h-4 w-4" /> Toutes les actualités
        </Link>
      </article>

      {/* Related */}
      <section className="bg-teranga-sand py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-3xl uppercase text-teranga-ink mb-8">À lire aussi</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((a) =>
            <Link key={a.id} to={`/actualite/${a.slug}`} className="tg-card-hover group overflow-hidden rounded-2xl bg-white border border-teranga-ink/10 hover:shadow-lg">
                <img src={a.cover} alt={a.title} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="p-4">
                  <Badge color="green" className="mb-2">{a.category}</Badge>
                  <h3 className="font-bold text-teranga-ink leading-snug line-clamp-2 group-hover:text-teranga-green transition">{a.title}</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>);

}