import { DeckView, Direction } from "@/types/cards";
import { suitOrder } from "@/types/constants";
import { HandStruct } from "@/types/structs";
import React from "react";
import CompactSuitRow from "./CompactSuitRow";


interface CompactHandRendererProps {
  hand: HandStruct;
  displayMode: DeckView
  direction: Direction;
  cardSize?: number;
  overlapPercent?: number;
}

export default function CompactHandRenderer(props: CompactHandRendererProps) {
  const {
    hand,
    displayMode,
    direction,
    cardSize = 50,
    overlapPercent = 12,
  } = props;

  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>{direction}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {suitOrder.map((suit) => (
          <CompactSuitRow
            key={suit}
            suit={suit}
            cards={hand[suit]}
            displayMode={displayMode}
            cardSize={cardSize}
            overlapPercent={overlapPercent}
          />
        ))}
      </div>
    </div>
  );
}

  