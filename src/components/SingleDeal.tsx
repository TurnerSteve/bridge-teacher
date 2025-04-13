"use client";

import { DealStruct } from "@/bridge/types/types";

import { Algo } from "@/bridge/types/enums";
import { DealerAlgoRadioButtons } from "./DealerAlgoRadioButtons";

import Tray from "./Tray";
import HandComponent from "./Hand";
import SingleDealController from "./SingleDealController";

import { useGlobalState } from "@/app/page";

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
  const {deal} = useGlobalState();
  const {dealCount} = useGlobalState();
  const {dealingAlgo, setDealingAlgo} = useGlobalState();

  // Function to handle global state update from the child
  // The child can do this but this may not be correct.
  function handleAlgoChange(newAlgo: Algo) {
    setDealingAlgo(newAlgo);
    console.log(`Algo changed to "${newAlgo}"`);
  }


      // We probably dont need to do a deal here. Just initialise an empty deal
  // useEffect(() => {

  //   console.log(`The first deal is a partial "${Algo.PARTIAL}" of size [11,6,15,5]`);
  //   const deal: DealResult = executeAlgo(Algo.PARTIAL, [11, 6, 9, 5]);
  //   appendDeal(deal.algo, deal.description, deal.deal);

  // }, []);

  if (!deal) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        {dealingAlgo}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex justify-center items-center row-start-1 col-start-1">
            <DealerAlgoRadioButtons onOptionChange={handleAlgoChange} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandComponent direction="North" hand={deal.deal.North} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <SingleDealController slots={slots} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandComponent direction="West" hand={deal.deal.West} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-2">
            <Tray boardId={dealCount} />
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

export default DealComponent;


