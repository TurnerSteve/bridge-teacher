import { Direction, Suit } from "./enums";
import { DealStruct } from "./types";

export const handStruct: DealStruct = {
    [Direction.North]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.East]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.South]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] },
    [Direction.West]: { [Suit.Spades]: [], [Suit.Hearts]: [], [Suit.Diamonds]: [], [Suit.Clubs]: [] }
  }