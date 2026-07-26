import React from 'react';

type Props = {children: React.ReactNode;color?: 'green' | 'yellow' | 'dark' | 'lime';className?: string;};

const styles: Record<string, string> = {
  green: 'bg-teranga-green text-white',
  yellow: 'bg-teranga-yellow text-teranga-ink',
  dark: 'bg-teranga-ink text-white',
  lime: 'bg-teranga-lime text-teranga-ink'
};

export function Badge({ children, color = 'green', className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${styles[color]} ${className}`}>
      {children}
    </span>);

}