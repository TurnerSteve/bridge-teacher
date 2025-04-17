
import { Direction, Rank, Suit } from "./enums";
import { DealStruct, HandStruct } from "./types";

export const handStruct: DealStruct = {
    [Direction.North]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.East]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.South]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.West]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] }
  }

    // Define the custom order for Rank as a mapping
  // cannot sort enumerated string types by index
export const RankOrder: Record<Rank, number> = {
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

// Helper function to create an empty HandStruct
const createEmptyHandStruct = (): HandStruct=> ({
  [Suit.Spades]: [],
  [Suit.Hearts]: [],
  [Suit.Diamonds]: [],
  [Suit.Clubs]: [],
});

// Helper function to create an empty DealStruct
const createEmptyDealStruct = (): DealStruct => ({
  [Direction.North]: createEmptyHandStruct(),
  [Direction.East]: createEmptyHandStruct(),
  [Direction.South]: createEmptyHandStruct(),
  [Direction.West]: createEmptyHandStruct(),
});

export { createEmptyHandStruct, createEmptyDealStruct }