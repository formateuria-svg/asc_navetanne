import React from 'react';
import { CalendarIcon, MapPinIcon, TrophyIcon, UserIcon } from 'lucide-react';
import type { Match } from '../../data/club';
import { TEAMS } from '../../data/club';
import { Badge } from '../ui/Badge';

export function MatchCard({ match }: {match: Match;}) {
  const team = TEAMS.find((t) => t.id === match.team);
  const d = new Date(match.date);
  const dateStr = d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <div className="tg-card-hover group relative rounded-2xl bg-white border border-teranga-ink/10 overflow-hidden shadow-sm hover:shadow-xl">
      <div className="tg-diagonal absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-4">
          <Badge color={match.home ? 'green' : 'dark'}>{match.home ? 'Domicile' : 'Extérieur'}</Badge>
          <span className="text-xs font-semibold uppercase tracking-wide text-teranga-ink/50">{team?.short}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 text-center">
            <div className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teranga-green text-teranga-yellow font-display text-lg">T</div>
            <p className="text-sm font-bold text-teranga-ink leading-tight">Teranga FC</p>
          </div>

          {match.status === 'played' && match.score ?
          <div className="font-display text-3xl text-teranga-ink px-2">
              {match.score.us}<span className="text-teranga-ink/30 mx-1">–</span>{match.score.them}
            </div> :

          <div className="text-center px-2">
              <p className="font-display text-xl text-teranga-green">VS</p>
              <p className="text-[11px] text-teranga-ink/50">{match.time}</p>
            </div>
          }

          <div className="flex-1 text-center">
            <div className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teranga-sand text-teranga-ink font-display text-lg">
              {match.opponent.replace(/ASC /, '').charAt(0)}
            </div>
            <p className="text-sm font-bold text-teranga-ink leading-tight">{match.opponent}</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-teranga-ink/10 grid grid-cols-1 gap-2 text-xs text-teranga-ink/70">
          <span className="flex items-center gap-1.5"><CalendarIcon className="h-3.5 w-3.5 text-teranga-green" /> {dateStr} · {match.time}</span>
          <span className="flex items-center gap-1.5"><MapPinIcon className="h-3.5 w-3.5 text-teranga-green" /> {match.venue}</span>
          <span className="flex items-center gap-1.5"><TrophyIcon className="h-3.5 w-3.5 text-teranga-green" /> {match.competition}</span>
          <span className="flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5 text-teranga-green" /> Arbitre : {match.referee}</span>
        </div>
      </div>
    </div>);

}