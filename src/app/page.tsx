"use client";

import DealComponent from "@/components/MultiDeal";
import { GlobalStateProvider } from "./DealContext";


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


