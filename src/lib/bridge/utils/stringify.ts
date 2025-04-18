import { Direction, Rank, Suit } from "@/lib/enums";
import { DealStruct, HandStruct, Separators } from "@/lib/types";

// Updated stringifyDeal using handSeparator
export function stringifyDeal(deal: DealStruct, separators: Separators): string {
    const directions = [Direction.North, Direction.East, Direction.South, Direction.West];
    return directions
      .map((direction) => stringifyHand(deal[direction], separators))
      .join(separators.handSeparator);
  }
  
  // Updated stringifyHand using suitSeparator
  function stringifyHand(hand: HandStruct, separators: Separators): string {
    const suits = [Suit.Spades, Suit.Hearts, Suit.Diamonds, Suit.Clubs];
    return suits
      .map((suit) => stringifySuit(hand[suit], separators.cardSeparator))
      .join(separators.suitSeparator);
  }
  
  // Updated stringifySuit using cardSeparator
  function stringifySuit(ranks: Rank[], cardSeparator: string): string {
    return ranks.join(cardSeparator); // Join ranks using cardSeparator
  }