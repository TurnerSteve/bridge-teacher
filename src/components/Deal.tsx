"use client";
import { useEffect, useState } from "react";
import { DealStruct } from "@/bridge/types/types";
import HandComponent from "./Hand";

/// Shadcn components
import { Button } from "@/components/ui/button";

import partialDeal from "@/bridge/deal-generators/partialDealGenerator";
import fisherYatesDeal from "@/bridge/deal-generators/fisherYatesDealGenerator";
import nsewDeal from "@/bridge/deal-generators/frawdoDealGenerator";

import { Algo } from "@/bridge/types/enums";
import { DealerAlgoRadioButtons } from "./DealerAlgoRadioButtons";
import { Card } from "./ui/card";

// Partial deal generator will generate
// slots [n1,n2,n3,n4] Cards n1=North, n2=East, n3=South, n4 West

// export interface DealCommandProps {
//   algo: Algo;
//   slots: number[];
// }
interface DealInputProps {
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

function DealComponent({ slots }: DealInputProps) {
  const [dealStored, setDeal] = useState<StoredDeal>();
  const [dealCountStore, setDealCount] = useState<number>(0);
  const [dealerAlgoStore, setDealerAlgo] = useState<Algo>(Algo.PARTIAL);

  // Function to handle state update from the child
  function handleDealerAlgoChange(newAlgo: Algo) {
    setDealerAlgo(newAlgo);
    console.log(`Algo changed to "${newAlgo}"`);
  }

  function appendDeal(algo: Algo, description: string, deal: DealStruct) {
    setDeal({ dealId: dealCountStore + 1, algo: algo, description, deal });
    setDealCount(dealCountStore + 1);
    console.log(`Appending Deal ${dealCountStore + 1} which uses algo "${algo}"`);
  }

  useEffect(() => {
    console.log(`The first deal is a partial "${Algo.PARTIAL}" of size [4,4,4,4]`);
    const deal: DealResult = executeAlgo(Algo.PARTIAL, [4, 4, 4, 4]);
    appendDeal(deal.algo, deal.description, deal.deal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dealStored) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex justify-center items-center row-start-1 col-start-1">
            <DealerAlgoRadioButtons onOptionChange={handleDealerAlgoChange} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandComponent direction="North" hand={dealStored.deal.North} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <Card >
              Redeal controller
          <Button
          className="mb-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => {
            const deal: DealResult = executeAlgo(dealerAlgoStore, slots);
            appendDeal(deal.algo, deal.description, deal.deal);
          }}
        >
          Redeal
        </Button>
        </Card>
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandComponent direction="West" hand={dealStored.deal.West} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandComponent direction="East" hand={dealStored.deal.East} />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandComponent direction="South" hand={dealStored.deal.South} />
          </div>
        </div>
      </div>
    </>
  );
}

function executeAlgo(algo: Algo, slots: number[]): DealResult {
  console.log(`Executing algo "${algo}" to decode \[${slots}\] slots`);

  let deal: DealResult;

  switch (algo) {
    case Algo.FISHERYATES:
      deal = fisherYatesDeal(slots);
      break;
    case Algo.PARTIAL:
      deal = partialDeal(slots);
      break;
    case Algo.HOMEGROWN:
      deal = nsewDeal(slots);
      break;
    default:
      deal = nsewDeal([0, 0, 0, 0]);
      break;
  }

  return deal;
}

export default DealComponent;
