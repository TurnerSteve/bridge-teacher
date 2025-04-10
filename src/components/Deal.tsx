"use client";
import { useCallback, useEffect, useState } from "react";
import { Direction } from "@/bridge/types/enums";
import { DealStruct } from "@/bridge/types/types";
import HandComponent from "./Hand";
import { Button } from "./ui/button";

// Partial deal generator will generate 
// slots [n1,n2,n3,n4] Cards n1=North, n2=East, n3=South, n4 West
const slots = [13,13,13,13]
 import generateDeal from "@/bridge/deal-generators/partialDealGenerator";

//  These random hand generators require  (n1=n2=n3=n4) defaulting to 13,13,13,13
//  import generateDeal from '@/bridge/deal-generators/frawdoDealGenerator';
//  import generateDeal from '@/bridge/deal-generators/fisherYatesDealGenerator';

function DealComponent() {
  const [dealState, setDealState] = useState<DealStruct>();

  const calculateDeal = useCallback((slots: number[]) => {
    const deal: DealStruct = generateDeal(slots);

    setDealState(deal);
  }, []); // no dependancy since input did not chage

  useEffect(() => {
    const slots = [8,8,8,8] ; // First deal only on startup

    calculateDeal(slots);

  },[calculateDeal]); // Empty dependency array ensures this runs only on mount

   if (!dealState) { // otherwise dealState wont be setup on first pass.
    return <div> Loading... </div> ; // Render fallback UI ... Needs a Skeleton
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => {

          calculateDeal(slots)}}
      >
        Redeal
      </Button>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
        <div className="flex justify-center items-center row-start-1 col-start-2">
          <HandComponent direction="North" hand={dealState[Direction.NORTH]} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-1">
          <HandComponent direction="West" hand={dealState[Direction.WEST]} />
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-3">
          <HandComponent direction="East" hand={dealState[Direction.EAST]} />
        </div>
        <div className="flex justify-center items-center row-start-3 col-start-2">
          <HandComponent direction="South" hand={dealState[Direction.SOUTH]} />
        </div>
      </div>
    </div>
  );
}

export default DealComponent;
