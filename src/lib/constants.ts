
import { Direction, Rank, Suit } from "./enums";
import { DealStruct, HandStruct } from "./types";

export const handStruct: DealStruct = {
    [Direction.NORTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.EAST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.SOUTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.WEST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] }
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
  [Suit.SPADES]: [],
  [Suit.HEARTS]: [],
  [Suit.DIAMONDS]: [],
  [Suit.CLUBS]: [],
});

// Helper function to create an empty DealStruct
const createEmptyDealStruct = (): DealStruct => ({
  [Direction.NORTH]: createEmptyHandStruct(),
  [Direction.EAST]: createEmptyHandStruct(),
  [Direction.SOUTH]: createEmptyHandStruct(),
  [Direction.WEST]: createEmptyHandStruct(),
});



// Define an enumerated type for suits
export const SuitSymbol = {
  [Suit.SPADES] : '♠',
  [Suit.HEARTS] : '♥',
  [Suit.DIAMONDS] : '♦',
  [Suit.CLUBS] : '♣'
}

// Enum for Suits (with suit icons)
export const  SuitLetter ={
  [Suit.SPADES] : 'S',
  [Suit.HEARTS] : 'H',
  [Suit.DIAMONDS] : 'D',
  [Suit.CLUBS] : 'C'
}

// Enum for Suits (with suit icons)
export const  Cardinal ={
  [Direction.NORTH] : 'N',
  [Direction.SOUTH] : 'S',
  [Direction.EAST] : 'E',
  [Direction.WEST] : 'W'
}

export { createEmptyHandStruct, createEmptyDealStruct }