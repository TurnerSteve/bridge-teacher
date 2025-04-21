import { Algo, Direction, Rank, Suit } from "./cards";

export type { HandStruct , DealStruct}

// This is the output of a deal generator so we know how a deal is created. 
export type DealResult = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};

// 
export type StoredDeal = {
  dealId: number;
  algo: Algo;
  description: string;
  deal: DealStruct;
}

// This may be a duplicate of createEmptyDealStruct
export const handStruct: DealStruct = {
    [Direction.NORTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.EAST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.SOUTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.WEST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] }
  }

type HandStruct = {
    [Suit.SPADES]: Rank[];
    [Suit.HEARTS]: Rank[];
    [Suit.DIAMONDS]: Rank[];
    [Suit.CLUBS]: Rank[];
  };
  
type DealStruct = {
    [Direction.NORTH]: HandStruct;
    [Direction.EAST]: HandStruct;
    [Direction.SOUTH]: HandStruct;
    [Direction.WEST]: HandStruct;
}

// Helper function to create an empty HandStruct
 const createEmptyHandStruct = (): HandStruct => ({
    [Suit.SPADES]: [],
    [Suit.HEARTS]: [],
    [Suit.DIAMONDS]: [],
    [Suit.CLUBS]: [],
  });
  
  // Helper function to create an empty DealStruct
export const createEmptyDealStruct = (): DealStruct => ({
    [Direction.NORTH]: createEmptyHandStruct(),
    [Direction.EAST]: createEmptyHandStruct(),
    [Direction.SOUTH]: createEmptyHandStruct(),
    [Direction.WEST]: createEmptyHandStruct(),
  });