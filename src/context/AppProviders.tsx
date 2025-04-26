// src/context/AppProviders.tsx

"use client";

import React from "react";

// Import your context providers here
import { AlgorithmProvider } from "./AlgorithmContext";
import { SettingsProvider } from "./SettingsContext";
import { DealStoreProvider } from "./DealStoreContext";
import { DeckViewProvider } from "./DeckViewContext";

// Add more providers as needed

/**
 * Combine multiple context providers into a single component.
 * Add or remove providers as your app grows.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <AlgorithmProvider>
        <DeckViewProvider>
          <DealStoreProvider>
            <AlgorithmProvider>{children}</AlgorithmProvider>
          </DealStoreProvider>
        </DeckViewProvider>
      </AlgorithmProvider>
    </SettingsProvider>
  );
}
