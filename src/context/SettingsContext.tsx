// src/context/SettingsContext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react';

export const MULTI_DEAL_OPTIONS = [4, 8, 16, 32, 64] as const;

type SettingsContextType = {
  multiDealCount: number;
  setMultiDealCount: (count: number) => void;
  partialDealSlots: number[];
  setPartialDealSlots: (arr: number[]) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [multiDealCount, setMultiDealCount] = useState<number>(16);
  const [partialDealSlots, setPartialDealSlots] = useState<number[]>([13, 13, 13, 13]);

  return (
    <SettingsContext.Provider value={{ multiDealCount, setMultiDealCount, partialDealSlots, setPartialDealSlots }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}

