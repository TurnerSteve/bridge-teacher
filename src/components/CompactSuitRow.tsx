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
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        position: "relative",
        height: cardSize,
        width: containerWidth,
      }}
    >
      <SuitSymbol suit={suit} displayMode={displayMode} />
      {/* Render cards with overlap */}
      <OverlappingCardsRow
        suit={suit}
        cards={cards}
        displayMode={displayMode}
        cardSize={24}
        overlapPercent={20}
      />
    </span>
  );
}

interface SuitSymbolProps {
  suit: Suit;
  displayMode: DeckView;
}

// Renders a suit symbol if we are displaying suiy in text format
export function SuitSymbol({ suit, displayMode }: SuitSymbolProps) {
  const isRed = suit === Suit.HEARTS || suit === Suit.DIAMONDS;
  return (
    <div
      style={{
        width: 16,
        textAlign: "center",
        color: isRed ? "red" : "black",
        fontWeight: "bold",
      }}
    >
      {displayMode === DeckView.TEXT && (
        <span style={{ width: 16, display: "inline-block" }}>
          {suitSymbols[suit]}
        </span>
      )}
    </div>
  );
}

interface OverlappingCardsRowProps {
  suit: Suit;
  cards: Rank[];
  displayMode: DeckView;
  cardSize: number;
  overlapPercent: number; // e.g., 20 for 20%
}

export function OverlappingCardsRow({
  suit,
  cards,
  displayMode,
  cardSize,
  overlapPercent,
}: OverlappingCardsRowProps) {
  return (
    <div
      className="relative"
      style={{
        height: cardSize,
        width:
          cardSize + (cards.length - 1) * (cardSize * (overlapPercent / 100)),
      }}
    >
      {cards.map((rank, i) => (
        <div
          key={`${suit}-${rank}`}
          className="absolute"
          style={{
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
  );
}
