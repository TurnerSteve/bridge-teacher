"use client";

import { Direction } from "@/types/cards";
import { BridgeDealGrid } from "../../components/BridgeDealGrid";
import { HandRenderer } from "../../components/HandRenderer";
import { useDeckView } from "@/context/DeckViewContext";
import { useGlobalData } from "@/context/DealStoreContext";

export default function BridgeDeal() {
  const { storedDeals: dealData } = useGlobalData();
  const { deckView: displayMode } = useDeckView();

  const boardNo = dealData[0].boardNo;
  const northHand = dealData[0].deal[Direction.NORTH];
  const southHand = dealData[0].deal[Direction.SOUTH];
  const eastHand = dealData[0].deal[Direction.EAST];
  const westHand = dealData[0].deal[Direction.WEST];
  return (
    <BridgeDealGrid
      north={
        <HandRenderer
          hand={northHand}
          displayMode={displayMode}
          direction={Direction.NORTH}
        />
      }
      east={
        <HandRenderer
          hand={eastHand}
          displayMode={displayMode}
          direction={Direction.EAST}
        />
      }
      south={
        <HandRenderer
          hand={southHand}
          displayMode={displayMode}
          direction={Direction.SOUTH}
        />
      }
      west={
        <HandRenderer
          hand={westHand}
          displayMode={displayMode}
          direction={Direction.WEST}
        />
      }
      center={
        <div className="text-center">
          <div className="font-bold">Vul: NS</div>
          <div className="text-sm">Dealer: E</div>
        </div>
      }
      // redealButton={
      //   <button className="btn btn-sm bg-blue-500 text-white rounded px-2 py-1 shadow">
      //     Redeal
      //   </button>
      // }
      infoTopLeft={
        <div className="text-xs text-gray-500">
          <div className="font-bold">Vul: NS</div>
          <div className="text-sm">Dealer: E</div>
        </div>
      }
      infoTopRight={
        <div className="text-xs text-gray-500">
            Board {boardNo}
        </div>
      }
      infoBottomLeft={<div className="text-xs text-gray-500">NS: 620</div>}
      infoBottomRight={<div className="text-xs text-gray-500">EW: 0</div>}
    />
  );
}
