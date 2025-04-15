
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

export type {HandStruct, DealStruct, }

export type DealStructure =  Record<Direction, Record<Suit, Rank[]>> 
// Not sure about having Dealstruct and Dealstructure
// Should only use one of them but this is to get Typescript working
// The important theing is that all information is enumerated.
