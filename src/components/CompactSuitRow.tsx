import { Suit, Rank, DeckView } from "@/types/cards";
import { suitSymbols } from "@/types/constants";
import { CardRenderer } from "./CardRenderer";


interface CompactSuitRowProps {
  suit: Suit;
  cards: Rank[];
  displayMode: DeckView;
  cardSize?: number;
  overlapPercent?: number; // Percentage of card width to shift each card
}

export default function CompactSuitRow(props: CompactSuitRowProps) {
  const {
    suit,
    cards,
    displayMode,
    cardSize = 40,
    overlapPercent = 16, // Show 80% overlap, 20% visible
  } = props;

  const totalCards = cards.length;
  const overlapFraction = overlapPercent / 100;
  // Container width: first card fully, rest only the visible percent
  const containerWidth =
    cardSize + (totalCards - 1) * cardSize * overlapFraction;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span
        style={{
          width: 16,
          textAlign: "center",
          color:
            suit === Suit.HEARTS || suit === Suit.DIAMONDS ? "red" : "black",
          fontWeight: "bold",
        }}
      >
        {suitSymbols[suit]}
      </span>
      <div
        style={{
          position: "relative",
          height: cardSize,
          width: containerWidth,
        }}
      >
        {cards.map((rank, i) => (
          <div
            key={`${suit}-${rank}`}
            style={{
              position: "absolute",
              left: `${i * overlapPercent}%`,
              zIndex: i,
              width: cardSize,
              height: cardSize,
            }}
          >
            <CardRenderer
              suit={suit}
              rank={rank}
              displayMode={displayMode}
              size={cardSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

