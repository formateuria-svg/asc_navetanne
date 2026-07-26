import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Player } from '../../data/club';

export function PlayerCard({ player, index = 0 }: {player: Player;index?: number;}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}>
      
      <Link
        to={`/joueur/${player.id}`}
        className="tg-card-hover group relative block overflow-hidden rounded-2xl bg-teranga-ink aspect-[3/4] shadow-sm hover:shadow-2xl">
        
        <img
          src={player.photo}
          alt={player.name}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        
        <div className="tg-scrim absolute inset-0" aria-hidden />
        <span className="absolute top-3 right-3 font-display text-5xl text-teranga-yellow/90 leading-none tg-outline-text-yellow">
          {player.number}
        </span>
        <span className="absolute top-3 left-3 rounded-full bg-teranga-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {player.position}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-display text-2xl uppercase text-white leading-none">{player.name}</p>
          <div className="mt-2 flex items-center gap-3 text-[11px] text-white/70">
            <span>{player.stats.matches} matchs</span>
            <span className="text-teranga-yellow font-bold">{player.stats.goals} buts</span>
            <span>{player.stats.assists} passes</span>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-teranga-yellow/0 group-hover:border-teranga-yellow/60 rounded-2xl transition-colors" aria-hidden />
      </Link>
    </motion.div>);

}