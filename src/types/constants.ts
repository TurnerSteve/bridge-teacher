
import { Direction, Rank, Suit } from "./cards";

export {suitSymbols, suitOrder, rankOrder }


  // Define the custom order for Rank as a mapping
  // cannot sort enumerated string types by index
const rankOrder: Record<Rank, number> = {
  [Rank.ACE]: 1,
  [Rank.KING]: 2,
  [Rank.QUEEN]: 3,
  [Rank.JACK]: 4,
  [Rank.TEN]: 5,
  [Rank.NINE]: 6,
  [Rank.EIGHT]: 7,
  [Rank.SEVEN]: 8,
  [Rank.SIX]: 9,
  [Rank.FIVE]: 10,
  [Rank.FOUR]: 11,
  [Rank.THREE]: 12,
  [Rank.TWO]: 13,
};

const suitSymbols: Record<Suit, string> = {
  [Suit.SPADES]: '♠',
  [Suit.HEARTS]: '♥',
  [Suit.DIAMONDS]: '♦',
  [Suit.CLUBS]: '♣',
};

// Display order for suits
const suitOrder: Suit[] = [
  Suit.SPADES,
  Suit.HEARTS,
  Suit.DIAMONDS,
  Suit.CLUBS,
];

// Display order for directions
export const directions: Direction[] = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
];

