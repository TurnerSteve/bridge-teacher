
import { Direction, Rank, Suit, Hand, Algo} from "./enums";
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

type DealResult = {
  algo: Algo;
  description: string;
  deal: DealStruct;
};

type StoredDeal = {
  dealId: number;
  algo: Algo;
  description: string;
  deal: DealStruct;
};

export type {HandStruct, DealStruct, DealResult, StoredDeal}

export type DealStructure =  Record<Direction, Record<Suit, Rank[]>> 
// Not sure about having Dealstruct and Dealstructure
// Should only use one of them but this is to get Typescript working
// The important theing is that all information is enumerated.
