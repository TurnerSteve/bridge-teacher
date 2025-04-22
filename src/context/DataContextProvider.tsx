
"use client"
import { StoredDeal} from "@/types/structs";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createEmptyDealStruct } from "@/types/structs";
import { Algo } from "@/types/bridge";

// Step 1: Define the Context Type
interface GlobalDataContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;

  storedDeal: StoredDeal;
  setStoredDeal: Dispatch<SetStateAction<StoredDeal>>;

  storedDeals: StoredDeal[];
  setStoredDeals: Dispatch<SetStateAction<StoredDeal[]>>;
  addStoredDeal: (newDeal: StoredDeal) => void;

  dealCount: number;
  setDealCount: Dispatch<SetStateAction<number>>;

}

// Create the Context with a default value of null
const GlobalDataContext = createContext<GlobalDataContextType | undefined>(
  undefined
);

// Step 2: Create a Provider Component
type GlobalDataProviderProps = {
  children: ReactNode;
};

export function GlobalDataProvider({ children }: GlobalDataProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [storedDeal, setStoredDeal] = useState<StoredDeal>(
    createEmptyStoredDeal
  );
  const [storedDeals, setStoredDeals] = useState<StoredDeal[]>([createEmptyStoredDeal()]);
  const [dealCount, setDealCount] = useState<number>(0);

  // Function to add a single deal to the array
  const addStoredDeal = (newDeal: StoredDeal) => {
    setStoredDeals((prevDeals) => [...prevDeals, newDeal]);
  };

  return (
    <GlobalDataContext.Provider
      value={{
        count,
        setCount,
        storedDeal,
        setStoredDeal,
        dealCount,
        setDealCount,
        storedDeals,
        setStoredDeals,
        addStoredDeal,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
}

// Step 3: Custom Hook to Use Global State
export function useGlobalData() {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
}

// Helper function to create an empty StoredDeal
const createEmptyStoredDeal = (): StoredDeal => ({
  dealId: 0, // Default ID
  algo: Algo.PARTIAL, // Default Algorithm
  description: "", // Default Description
  deal: createEmptyDealStruct(), // Default DealStruct
});
