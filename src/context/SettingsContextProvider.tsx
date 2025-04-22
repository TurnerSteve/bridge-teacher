"use client"

import { Algo } from "@/types/bridge";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// step 1 : Define the Context type
interface GlobalSettingsContextType {
  dealingAlgo: Algo;
  setDealingAlgo: Dispatch<SetStateAction<Algo>>;
  dealingSlots: number[];
  setDealingSlots: Dispatch<SetStateAction<number[]>>;
  boardsPerDealset: number;
  setBoardsPerDealset: Dispatch<SetStateAction<number>>;
}

// Create the Context with a default value of null
const GlobalSettingsContext = createContext<
  GlobalSettingsContextType | undefined
>(undefined);

// Step 2: Create a Provider Component
type GlobalSettingsProviderProps = {
  children: ReactNode;
};

export function GlobalSettingsProvider({
  children,
}: GlobalSettingsProviderProps) {
  const [dealingAlgo, setDealingAlgo] = useState<Algo>(Algo.PARTIAL);
  const [dealingSlots, setDealingSlots] = useState<number[]>([13, 13, 13, 13]);
  const [boardsPerDealset, setBoardsPerDealset] = useState<number>(32);

  return (
    <GlobalSettingsContext.Provider
      value={{
        dealingAlgo,
        setDealingAlgo,
        dealingSlots,
        setDealingSlots,
        boardsPerDealset,
        setBoardsPerDealset,
      }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
}

// Step 3: Custom Hook to Use Global Settings
export function useGlobalSettings() {
  const context = useContext(GlobalSettingsContext);
  if (!context) {
    throw new Error("useGlobalSettings must be used within a GlobalSettingsProvider");
  }
  return context;
}



