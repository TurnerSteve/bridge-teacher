
"use client"
import { Board} from "@/types/structs";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createEmptyDealStruct } from "@/types/structs";
import { Algorithm } from "@/types/dealingAlgo-enum";


// Step 1: Define the Context Type
interface GlobalDataContextType {

  storedDeals: Board[];
  setStoredDeals: Dispatch<SetStateAction<Board[]>>;
  addStoredDeal: (newDeal: Board) => void;

  dealPointer: number;
  setDealPointer: Dispatch<SetStateAction<number>>;

}

// Create the Context with a default value of null
const GlobalDataContext = createContext<GlobalDataContextType | undefined>(
  undefined
);

// Step 2: Create a Provider Component
type GlobalDataProviderProps = {
  children: ReactNode;
};

export function DealStoreProvider({ children }: GlobalDataProviderProps) {

  const [storedDeals, setStoredDeals] = useState<Board[]>([createEmptyStoredDeal()]);
  const [dealPointer, setDealPointer] = useState<number>(0);

  // Function to add a single deal to the array
  const addStoredDeal = (newDeal: Board) => {
    setStoredDeals((prevDeals) => [...prevDeals, newDeal]);
  };

  return (
    <GlobalDataContext.Provider
      value={{
        dealPointer,
        setDealPointer,
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
const createEmptyStoredDeal = (): Board => ({
  boardNo: 0, // Default ID
  algo: Algorithm.Pavlicek, // Default Algorithm
  description: "", // Default Description
  deal: createEmptyDealStruct(), // Default DealStruct
});
