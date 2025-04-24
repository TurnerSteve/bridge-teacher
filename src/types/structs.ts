
import { Direction, Rank, Suit } from "./cards";
import { Algorithm } from "./dealingAlgo-enum";

export type { HandStruct , DealStruct}

// This is the output of a deal generator so we know how a deal is created. 
export type DealResult = {
  algo: Algorithm;
  description: string;
  deal: DealStruct;
};

// We store a board number and the algorithm used to generate the deal
// Description is for describing key point about the deal
// ie Balanced hands or 2 suiters 4441 and so on.

// Future expansion - PBN fields
// Event, Site, Date, Dealer, Vul
// Scoring, Declarer, Contract, Result, Deal
// Dealer and Vul can be constructed from board Number 1-16
// Bidding, Declarer, Cardplay, Result, comments - not yet. 

export type Board = {
  boardNo: number;  // Usually the board number... deal[0] = board 1
  algo: Algorithm;      // pavlicek, Home grown or Fisher-Yates
  description: string;
  deal: DealStruct; // 3D array structure using enumerated types.
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

  // Need an empty structure the first board to initialise the array of dealt board.
  // This is identical to createEmpty DealStruct. To be removed.
export const handStruct: DealStruct = {
  [Direction.NORTH]: { [Suit.SPADES]: [Rank.ACE], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
  [Direction.EAST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
  [Direction.SOUTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
  [Direction.WEST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] }
}