"use client";
import { useEffect, useState } from "react";
import { DealStruct } from "@/bridge/types/types";
import HandComponent from "./Hand";
import { Button } from "./ui/button";
import partialDeal from "@/bridge/deal-generators/partialDealGenerator";
import fisherYatesDeal from "@/bridge/deal-generators/fisherYatesDealGenerator";
import nsewDeal from "@/bridge/deal-generators/frawdoDealGenerator";

import { Algo } from "@/bridge/types/enums";

// Partial deal generator will generate
// slots [n1,n2,n3,n4] Cards n1=North, n2=East, n3=South, n4 West



// export interface DealCommandProps {
//   algo: Algo;
//   slots: number[];
// }
interface DealInputProps {
  algo: Algo;
  slots: number[];
}

export type DealResults = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};


function DealComponent( {algo, slots } : DealInputProps) {
  const [dealState, setDealState] = useState<DealResults>();

  useEffect(() => {
    setDealState(executeAlgo(algo, [8,8,8,8]));
  }, [algo, slots]);

  if (!dealState) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          const newDeal = executeAlgo(algo, slots);
          setDealState(newDeal);
        }}
      >
        Redeal
      </Button>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
        <div className="flex justify-center items-center row-start-1 col-start-2">
          <HandComponent direction="North" hand={dealState.deal.North} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-1">
          <HandComponent direction="West" hand={dealState.deal.West} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-3">
          <HandComponent direction="East" hand={dealState.deal.East} />
        </div>
        <div className="flex justify-center items-center row-start-3 col-start-2">
          <HandComponent direction="South" hand={dealState.deal.South} />
        </div>
      </div>
    </div>
  );
}

let deal: DealResults;
function executeAlgo(algo: Algo, slots: number[]): DealResults {
  console.log(`Algorithm is "${algo}" decoding ${slots}`);

  switch (algo) {
    case Algo.FisherYates:
      deal = fisherYatesDeal (slots);
      break;
    case Algo.Partial:
      deal = partialDeal(slots);
      break;
    case Algo.NSEW:
      deal = nsewDeal(slots);
      break;
    default:
      break;
  }
  console.log(deal);
  return deal;
}

export default DealComponent;
