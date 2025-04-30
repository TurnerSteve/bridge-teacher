"use client";

import { Direction } from "@/types/cards";
import { BridgeDealGrid } from "../../components/BridgeDealGrid";
import { useDeckView } from "@/context/DeckViewContext";
import { useGlobalData } from "@/context/DealStoreContext";
import CompactHandRenderer from "@/components/CompactHandRenderer";
import { getTrayInfo } from "@/lib/bridge/utils";

export default function CompactBridgeDeal() {
  const { storedDeals: dealData } = useGlobalData();
  const { deckView: displayMode } = useDeckView();

  const boardNo = dealData[0].boardNo;
  const northHand = dealData[0].deal[Direction.NORTH];
  const southHand = dealData[0].deal[Direction.SOUTH];
  const eastHand = dealData[0].deal[Direction.EAST];
  const westHand = dealData[0].deal[Direction.WEST];

  const algo = dealData[0].algo;
  const info = getTrayInfo(boardNo)

  
  return (
    <BridgeDealGrid
      north={
        <CompactHandRenderer
          hand={northHand}
          displayMode={displayMode}
          direction={Direction.NORTH}
        />
      }
      east={
        <CompactHandRenderer
          hand={eastHand}
          displayMode={displayMode}
          direction={Direction.EAST}
        />
      }
      south={
        <CompactHandRenderer
          hand={southHand}
          displayMode={displayMode}
          direction={Direction.SOUTH}
        />
      }
      west={
        <CompactHandRenderer
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
      //   redealButton={
      //     // <button className="btn btn-sm bg-blue-500 text-white rounded px-2 py-1 shadow">
      //     //   Redeal
      //     // </button>
      //   }

      infoTopLeft={
        <div className="text-xs text-gray-500">
          <div className="text-xs">Algorithm</div>
          <div className="text-lg font-bold">{algo}</div>
        </div>
      }
      infoTopRight={
        <div className="text-xs text-gray-500">Board {boardNo}</div>
      }
      infoBottomLeft={<div className="text-xs text-gray-500">Dealer {info.dealer}</div>}
      infoBottomRight={<div className="text-xs text-gray-500">{info.vulnerability}</div>}
    />
  );
}
