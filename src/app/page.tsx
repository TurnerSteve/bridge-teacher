"use client";
import { Algo } from "@/bridge/types/enums";
import { createEmptyDealStruct } from "@/bridge/types/types";
import DealComponent, { StoredDeal } from "@/components/SingleDeal";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Step 1: Define the Context Type
interface GlobalStateContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  deal : StoredDeal ;
  setDeal : Dispatch<SetStateAction<StoredDeal>>
  dealCount : number ;
  setDealCount : Dispatch<SetStateAction<number>>
  dealingAlgo : Algo ;
  setDealingAlgo : Dispatch<SetStateAction<Algo>>
}

// Create the Context with a default value of null
const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

// Step 2: Create a Provider Component
type GlobalStateProviderProps = {
  children: ReactNode;
};

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [deal, setDeal] = useState<StoredDeal>(createEmptyStoredDeal);
  const [dealCount, setDealCount] = useState<number>(0);
  const [dealingAlgo, setDealingAlgo] = useState<Algo>(Algo.PARTIAL);
  
  return (
    <GlobalStateContext.Provider value={{ count, setCount, deal, setDeal, dealCount, setDealCount, dealingAlgo, setDealingAlgo  }}>
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

// Example Usage
export function Counter() {
  const { count, setCount } = useGlobalState();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <GlobalStateProvider>
      <div className="flex justify-center items-center">
        <DealComponent slots={[13, 13, 13, 13]} />
        {/* All deals will be whole but we can set partials between 0 and 13 */}
      </div>
    </GlobalStateProvider>
  );
}

// Helper function to create an empty StoredDeal
const createEmptyStoredDeal = (): StoredDeal => ({
  dealId: 0, // Default ID
  algo: Algo.PARTIAL, // Default Algorithm
  description: "", // Default Description
  deal: createEmptyDealStruct(), // Default DealStruct
});
