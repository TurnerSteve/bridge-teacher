
import { Direction, Rank, Suit, Hand} from "./enums";
type HandStruct = {
    [Suit.SPADES]: Rank[];
    [Suit.HEARTS]: Rank[];
    [Suit.DIAMONDS]: Rank[];
    [Suit.CLUBS]: Rank[];
  }
  
type DealStruct = {
    [Hand.NORTH]: HandStruct;
    [Hand.EAST]: HandStruct;
    [Hand.SOUTH]: HandStruct;
    [Hand.WEST]: HandStruct;
}

export type {HandStruct, DealStruct}

export type DealStructure =  Record<Direction, Record<Suit, Rank[]>> 
// Not sure about having Dealstruct and Dealstructure
// Should only use one of them but this is to get Typescript working
// The important theing is that all information is enumerated.
