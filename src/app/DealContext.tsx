import { Algo } from "@/bridge/types/enums";
import { StoredDeal } from "@/components/SingleDeal";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createEmptyDealStruct } from "@/bridge/types/types";

// Step 1: Define the Context Type
interface GlobalStateContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;

  storedDeal: StoredDeal;
  setStoredDeal: Dispatch<SetStateAction<StoredDeal>>;

  storedDeals: StoredDeal[];
  setStoredDeals: Dispatch<SetStateAction<StoredDeal[]>>;
  addStoredDeal: (newDeal: StoredDeal) => void;

  dealCount: number;
  setDealCount: Dispatch<SetStateAction<number>>;

  dealingAlgo: Algo;
  setDealingAlgo: Dispatch<SetStateAction<Algo>>;
}

// Create the Context with a default value of null
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

// Step 2: Create a Provider Component
type GlobalStateProviderProps = {
  children: ReactNode;
};

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [storedDeal, setStoredDeal] = useState<StoredDeal>(
    createEmptyStoredDeal
  );
  const [storedDeals, setStoredDeals] = useState<StoredDeal[]>([createEmptyStoredDeal()]);
  const [dealCount, setDealCount] = useState<number>(0);
  const [dealingAlgo, setDealingAlgo] = useState<Algo>(Algo.PARTIAL);

  // Function to add a single deal to the array
  const addStoredDeal = (newDeal: StoredDeal) => {
    setStoredDeals((prevDeals) => [...prevDeals, newDeal]);
  };

  return (
    <GlobalStateContext.Provider
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
        dealingAlgo,
        setDealingAlgo,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

// Step 3: Custom Hook to Use Global State
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
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
