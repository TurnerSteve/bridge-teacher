"use client"
import DealSelectorComponent from "@/components/dealDisplay/DealSelector";
import { useGlobalData } from "@/context/DataContextProvider";
import { useGlobalSettings } from "@/context/SettingsContextProvider";

import { Algo, Direction } from "@/types/cards";
import { DealStruct, StoredDeal } from "@/types/structs";
import { useState } from "react";
import HandComponent from "@/components/dealDisplay/HandComponent";
import MultiDealGenerator from "@/app/multiple-deal/MultiDealGenerator";
import { CentreBoard } from "@/components/dealDisplay/CentreBoard";

// interface DealInputProps {
//   slots: number[];
// }

export type DealResult = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};

function MultiDealComponent() {
  const [boardId, setBoardId] = useState(1);

  const { storedDeals } = useGlobalData();
  const { dealingSlots } = useGlobalSettings();
  
  const boardIndex = boardId -1 
  // const slots = [13,13,13,13]
 
  // We have dealt an empty deal for proper initialisation
  // This is deal[0] which on statup is an empty deal
  const dealsMade = storedDeals.length;

  if (!storedDeals) {
    return <div> Loading {storedDeals} deals... </div>; // Render fallback UI ... Needs a Skeleton
  }
  const deal : StoredDeal = storedDeals[boardIndex] ;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex justify-center items-center row-start-1 col-start-1">
            <DealSelectorComponent maxDeal={dealsMade} onUpdateBoardId={setBoardId}/>
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandComponent direction={Direction.NORTH} hand={deal.deal.North} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <MultiDealGenerator slots={dealingSlots} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandComponent direction={Direction.WEST} hand={deal.deal.West} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-2">
            <CentreBoard boardId={boardId} size={200}/>
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandComponent direction={Direction.EAST} hand={deal.deal.East} />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-1">
            Dealing  Algo : {deal.algo}
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandComponent direction={Direction.SOUTH} hand={deal.deal.South} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiDealComponent;
