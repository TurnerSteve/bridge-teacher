"use client";

import SingleDealController from "./SingleDealController";
import { useGlobalData } from "@/context/DealStoreContext";
import { CentreBoard } from "@/components/dealDisplay/CentreBoard";
import { Direction, DeckView } from "@/types/cards";
import { HandRenderer } from "@/components/HandRenderer";

// Partial deal generator will generate
// slots [n1,n2,n3,n4] Cards n1=North, n2=East, n3=South, n4 West

function DealComponent() {
  const { storedDeals: dealData } = useGlobalData();

  const boardNo = dealData[0].boardNo;
  const northHand = dealData[0].deal[Direction.NORTH];
  const southHand = dealData[0].deal[Direction.SOUTH];
  const eastHand = dealData[0].deal[Direction.EAST];
  const westHand = dealData[0].deal[Direction.WEST];

  if (!dealData) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex justify-center items-center row-start-2 col-start-2">
            <CentreBoard boardId={boardNo} size={200} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <SingleDealController />
          </div>

          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandRenderer
              hand={northHand}
              displayMode={DeckView.TEXT} // or .TEXT, .SYMBOL, .ICON
              direction={Direction.NORTH}
            />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandRenderer
              hand={eastHand}
              displayMode={DeckView.SYMBOL} // or .TEXT, .SYMBOL, .ICON
              direction={Direction.EAST}
            />
          </div>

          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandRenderer
              hand={southHand}
              displayMode={DeckView.ICON} // or .TEXT, .SYMBOL, .ICON
              direction={Direction.SOUTH}
            />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandRenderer
              hand={westHand}
              displayMode={DeckView.IMAGE} // or .TEXT, .SYMBOL, .ICON
              direction={Direction.WEST}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DealComponent;
