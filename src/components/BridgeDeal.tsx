import { BridgeDealGrid } from "./BridgeDealGrid";
import { HandRenderer } from "./HandRenderer";

<BridgeDealGrid
  north={<HandRenderer hand={northHand} displayMode={displayMode} direction="North" />}
  east={<HandRenderer hand={eastHand} displayMode={displayMode} direction="East" />}
  south={<HandRenderer hand={southHand} displayMode={displayMode} direction="South" />}
  west={<HandRenderer hand={westHand} displayMode={displayMode} direction="West" />}
  center={
    <div className="text-center">
      <div className="font-bold">Vul: NS</div>
      <div className="text-sm">Dealer: E</div>
    </div>
  }
  redealButton={
    <button className="btn btn-sm bg-blue-500 text-white rounded px-2 py-1 shadow">
      Redeal
    </button>
  }
  infoTopLeft={<div className="text-xs text-gray-500">IMP: 12</div>}
  infoTopRight={<div className="text-xs text-gray-500">Board 1</div>}
  infoBottomLeft={<div className="text-xs text-gray-500">NS: 620</div>}
  infoBottomRight={<div className="text-xs text-gray-500">EW: 0</div>}
/>
