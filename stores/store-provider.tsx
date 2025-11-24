'use client';

import { useEffect } from 'react';
import { useCartStore } from './cart-store';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
