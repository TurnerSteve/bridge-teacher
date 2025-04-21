import { Direction, Rank, Suit } from "@/lib/enums";
import { Card } from "../ui/card"; // Shadcn card
import { suitSymbols } from "@/lib/constants";

interface HandProps {
  direction: Direction;
  hand: { [key in Suit]: Rank[] }; // Allow null or undefined
  showSuitSymbols?: boolean; // New boolean prop to control suit symbol display
}

const suitColors = {
  [Suit.SPADES]: "text-black",
  [Suit.HEARTS]: "text-red-500",
  [Suit.DIAMONDS]: "text-red-500",
  [Suit.CLUBS]: "text-black",
};

export default function HandComponent({ direction, hand, showSuitSymbols = true }: HandProps) {
  return (
    <Card className="p-4 w-full max-w-md">
      <h2 className="font-light text-sm mb-0">{direction}</h2>
      <div className="space-y-0">
        {hand ? ( // Check if hand exists and is not empty
          Object.entries(hand).map(([suit, cards]) => (
            <div key={suit} className="flex items-center space-x-2">
              {showSuitSymbols && (
                <div className={`${suitColors[suit as Suit]} w-3 text-lg`}>
                  {suitSymbols[suit as Suit] || "?"} {/* Display suit symbol */}
                </div>
              )}
              <SuitComponent suit={suit as Suit} cards={cards} />
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-sm">No cards available</div> // Fallback message
        )}
      </div>
    </Card>
  );
}

interface SuitProps {
  suit: Suit;
  cards: Rank[];
}

function SuitComponent({ suit, cards }: SuitProps) {


  const cardString = `${cards.length > 0 ? cards.join(" ") : "-"}`;
  console.log("SuitProps:", { suit, cards });

  return (
    <div className="flex items-center space-x-2">
      <div className={suitColors[suit]}>{cardString}</div>
    </div>
  );
}
