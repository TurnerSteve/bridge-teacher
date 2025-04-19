import { Direction, Rank, Suit, Algo, Char} from "./enums";
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

// Updated Separators type to use the enumerated SeparatorType
interface Separators {
  handSeparator: Char;
  suitSeparator: Char;
  cardSeparator: Char;
}

export type { HandStruct, DealStruct, DealResult, StoredDeal };
export type { Separators};

 