"use client";
import DealSelectorComponent from "@/components/dealDisplay/DealSelector";
import { useGlobalData } from "@/context/DealStoreContext";

import { Direction} from "@/types/cards";
import { DealStruct, Board } from "@/types/structs";
import { useState } from "react";

import { CentreBoard } from "@/components/dealDisplay/CentreBoard";
import { Algorithm } from "@/types/dealingAlgo-enum";
import MultiDealController from "./MultiDealController";
import { HandRenderer } from "@/components/HandRenderer";
import { useDeckView } from "@/context/DeckViewContext";

// interface DealInputProps {
//   slots: number[];
// }

export type DealResult = {
  algo: Algorithm;
  description: string;
  deal: DealStruct;
};

function MultiDealComponent() {
  const { deckView: deckView } = useDeckView();
  const { storedDeals } = useGlobalData();
  const [dealPointer, setDealPointer] = useState(0);

  // We have dealt an empty deal for proper initialisation
  // This is deal[0] which on statup is an empty deal
  const previousDeals = storedDeals.length - 1;

  if (!storedDeals) {
    return <div> Loading {storedDeals} deals... </div>; // Render fallback UI ... Needs a Skeleton
  }
  const deal: Board = storedDeals[dealPointer];
  const northHand = deal.deal[Direction.NORTH];
  const southHand = deal.deal[Direction.SOUTH];
  const eastHand = deal.deal[Direction.EAST];
  const westHand = deal.deal[Direction.WEST];

  return (
    <>       Multi Dealer
      <div className="flex flex-col items-center justify-center min-h-screen w-full">

        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
      
          <div className="flex justify-center items-center row-start-1 col-start-1">
            <DealSelectorComponent
              dealPointer={dealPointer}
              maxDeal={previousDeals}
              updateDealPointer={setDealPointer}
            />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <MultiDealController />
          </div>

          <div className="flex justify-center items-center row-start-2 col-start-2">
            <CentreBoard boardId={dealPointer} size={200} />
          </div>

          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandRenderer
              hand={northHand}
              displayMode={deckView}
              direction={Direction.NORTH}
              cardSize={40}
            />
          </div>

          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandRenderer
              hand={eastHand}
              displayMode={deckView}
              direction={Direction.WEST}
              cardSize={40}
            />
          </div>

          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandRenderer
              hand={westHand}
              displayMode={deckView}
              direction={Direction.EAST}
              cardSize={40}
            />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandRenderer
              hand={southHand}
              displayMode={deckView}
              direction={Direction.SOUTH}
              cardSize={40}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiDealComponent;
