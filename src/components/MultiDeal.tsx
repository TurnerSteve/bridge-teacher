
import { DealStruct } from "@/bridge/types/types";

import { Algo } from "@/bridge/types/enums";
import { DealerAlgoRadioButtons } from "./DealerAlgoRadioButtons";

import HandComponent from "./Hand";
import { useGlobalState } from "@/app/DealContext";
import DealSelectorComponent from "./DealSelector";
import { useState } from "react";
import { StoredDeal } from "./SingleDeal";
import MultiDealGenerator from "./MultiDealGenerator";
import { CentreBoard } from "./CentreBoard";

interface DealInputProps {
  slots: number[];
}

export type DealResult = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};

function MultiDealComponent({ slots }: DealInputProps) {
  const [dealId, setDealId] = useState(0);
  const {setDealingAlgo} = useGlobalState();
  const { storedDeals } = useGlobalState();


  // Function to handle state update from the child
  function handleDealerAlgoChange(newAlgo: Algo) {
    setDealingAlgo(newAlgo);
    console.log(`Algo changed to "${newAlgo}"`);
  }

  // We have dealt an empty deal for oproper initialisation
  // This is deal[0] which on statup is an empty deal
  const dealsSoFar = storedDeals.length - 1; 
  console.log(`We have dealt ${dealsSoFar} boards so far in this session)`);

  if (!storedDeals) {
    return <div> Loading {storedDeals} deals... </div>; // Render fallback UI ... Needs a Skeleton
  }
  const deal : StoredDeal = storedDeals[dealId] ;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex justify-center items-center row-start-1 col-start-1">
            <DealerAlgoRadioButtons onOptionChange={handleDealerAlgoChange} />
            <DealSelectorComponent maxDeal={dealsSoFar} onUpdateDealId={setDealId}/>
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandComponent direction="North" hand={deal.deal.North} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <MultiDealGenerator slots={slots} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandComponent direction="West" hand={deal.deal.West} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-2">
            <CentreBoard boardId={dealId} size={200}/>
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandComponent direction="East" hand={deal.deal.East} />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandComponent direction="South" hand={deal.deal.South} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiDealComponent;
