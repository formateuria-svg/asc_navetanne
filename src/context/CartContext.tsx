import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import type { Product } from '../data/club';

export type CartLine = {product: Product;qty: number;};

type CartCtx = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (p: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = useCallback((p: Product) => {
    setLines((prev) => {
      const found = prev.find((l) => l.product.id === p.id);
      if (found) return prev.map((l) => l.product.id === p.id ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, { product: p, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
    prev.
    map((l) => l.product.id === id ? { ...l, qty: Math.max(0, qty) } : l).
    filter((l) => l.qty > 0)
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const total = useMemo(() => lines.reduce((s, l) => s + l.qty * l.product.price, 0), [lines]);

  const value = useMemo(
    () => ({ lines, count, total, add, remove, setQty, clear }),
    [lines, count, total, add, remove, setQty, clear]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}