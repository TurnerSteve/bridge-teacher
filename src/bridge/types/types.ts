
import { Direction, Rank, Suit, Hand} from "./enums";
type HandStruct = {
    [Suit.Spades]: Rank[];
    [Suit.Hearts]: Rank[];
    [Suit.Diamonds]: Rank[];
    [Suit.Clubs]: Rank[];
  }
  
type DealStruct = {
    [Hand.North]: HandStruct;
    [Hand.East]: HandStruct;
    [Hand.South]: HandStruct;
    [Hand.West]: HandStruct;
}

// Helper function to create an empty HandStruct
const createEmptyHandStruct = (): HandStruct => ({
  [Suit.Spades]: [],
  [Suit.Hearts]: [],
  [Suit.Diamonds]: [],
  [Suit.Clubs]: [],
});

// Helper function to create an empty DealStruct
const createEmptyDealStruct = (): DealStruct => ({
  [Hand.North]: createEmptyHandStruct(),
  [Hand.East]: createEmptyHandStruct(),
  [Hand.South]: createEmptyHandStruct(),
  [Hand.West]: createEmptyHandStruct(),
});


export type {HandStruct, DealStruct, }
export { createEmptyHandStruct, createEmptyDealStruct }

export type DealStructure =  Record<Direction, Record<Suit, Rank[]>> 
// Not sure about having Dealstruct and Dealstructure
// Should only use one of them but this is to get Typescript working
// The important theing is that all information is enumerated.
