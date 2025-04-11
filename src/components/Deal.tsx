"use client";
import { useEffect, useState} from "react";
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

export type DealResult = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};

export type StoredDeal = {
  dealId: number;
  algo: Algo;
  description: string;
  deal: DealStruct;
};

function DealComponent({ algo , slots }: DealInputProps) {
  const [deal, setDeal] = useState<StoredDeal>();
  const [dealCount, setDealCount] = useState<number>(0);

  const appendDeal =(algo: Algo, description: string, deal: DealStruct) => {
      setDealCount(dealCount + 1);
      console.log(`Appending "${algo}" Algo with \[${slots}\] cards per player on deal ${dealCount}`);
      setDeal({ dealId: dealCount, algo, description, deal });
    }

  useEffect(() => {
    const deal = executeAlgo(Algo.Partial, [9,9,9,9]);
    appendDeal(deal.algo, deal.description, deal.deal);
  }, []); // ensures this runs just once. Not really an error.

  if (!deal) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          const deal: DealResult = executeAlgo(algo, slots);
          appendDeal(deal.algo, deal.description, deal.deal);
        }}
      >
        Redeal
      </Button>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
        <div className="flex justify-center items-center row-start-1 col-start-2">
          <HandComponent direction="North" hand={deal.deal.North} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-1">
          <HandComponent direction="West" hand={deal.deal.West} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-3">
          <HandComponent direction="East" hand={deal.deal.East} />
        </div>
        <div className="flex justify-center items-center row-start-3 col-start-2">
          <HandComponent direction="South" hand={deal.deal.South} />
        </div>
      </div>
    </div>
  );
}

let deal: DealResult;
function executeAlgo(algo: Algo, slots: number[]): DealResult {
  // console.log(`Algorithm is "${algo}" decoding ${slots}`);

  switch (algo) {
    case Algo.FisherYates:
      deal = fisherYatesDeal(slots);
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
