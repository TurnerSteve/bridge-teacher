import { Rank, Suit } from "@/lib/enums";


interface SuitProps {
  suit: Suit;
  cards: Rank[];
}

// Should be able to use suit symbols from the enumerated type without this.
function SuitComponent({ suit, cards }: SuitProps) {

  const suitColors = {
    [Suit.Spades]: 'text-black',
    [Suit.Hearts]: 'text-red-500',
    [Suit.Diamonds]: 'text-red-500',
    [Suit.Clubs]: 'text-black'
  };

  // Combine suit symbol, a space, and card ranks, or add a dash if no cards are present
  const cardString = `${suit} ${cards.length > 0 ? cards.join(' ') : '-'}`;

  return (
    <div className="flex items-center space-x-2">
      <div className={suitColors[suit]}>{cardString}</div>
    </div>
  );
}

export default SuitComponent;