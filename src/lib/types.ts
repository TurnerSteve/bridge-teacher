import { Direction, Rank, Suit, Algo } from "./enums";
type HandStruct = {
  [Suit.Spades]: Rank[];
  [Suit.Hearts]: Rank[];
  [Suit.Diamonds]: Rank[];
  [Suit.Clubs]: Rank[];
};

type DealStruct = {
  [Direction.North]: HandStruct;
  [Direction.East]: HandStruct;
  [Direction.South]: HandStruct;
  [Direction.West]: HandStruct;
};

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

// Type for separators
type Separators = {
  cardSeparator: string;
  suitSeparator: string;
  handSeparator: string;
};


export type { Separators, HandStruct, DealStruct, DealResult, StoredDeal };

// Not sure about having Dealstruct and Dealstructure
// Should only use one of them but this is to get Typescript working
// The important theing is that all information is enumerated.
 