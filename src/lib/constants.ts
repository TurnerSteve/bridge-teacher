
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

// Unicode suit symbols
export const suitSymbols: Record<Suit, string> = {
  [Suit.SPADES]: "♠",
  [Suit.HEARTS]: "♥",
  [Suit.DIAMONDS]: "♦",
  [Suit.CLUBS]: "♣",
};

// Unicode card icons
export const cardUnicode: Record<Suit, Record<Rank, string>> = {
  [Suit.SPADES]: {
    [Rank.ACE]: "🂡",
    [Rank.KING]: "🂮",
    [Rank.QUEEN]: "🂭",
    [Rank.JACK]: "🂫",
    [Rank.TEN]: "🂪",
    [Rank.NINE]: "🂩",
    [Rank.EIGHT]: "🂨",
    [Rank.SEVEN]: "🂧",
    [Rank.SIX]: "🂦",
    [Rank.FIVE]: "🂥",
    [Rank.FOUR]: "🂤",
    [Rank.THREE]: "🂣",
    [Rank.TWO]: "🂢",
  },
  [Suit.HEARTS]: {
    [Rank.ACE]: "🂱",
    [Rank.KING]: "🂾",
    [Rank.QUEEN]: "🂽",
    [Rank.JACK]: "🂻",
    [Rank.TEN]: "🂺",
    [Rank.NINE]: "🂹",
    [Rank.EIGHT]: "🂸",
    [Rank.SEVEN]: "🂷",
    [Rank.SIX]: "🂶",
    [Rank.FIVE]: "🂵",
    [Rank.FOUR]: "🂴",
    [Rank.THREE]: "🂳",
    [Rank.TWO]: "🂲",
  },
  [Suit.DIAMONDS]: {
    [Rank.ACE]: "🃁",
    [Rank.KING]: "🃎",
    [Rank.QUEEN]: "🃍",
    [Rank.JACK]: "🃋",
    [Rank.TEN]: "🃊",
    [Rank.NINE]: "🃉",
    [Rank.EIGHT]: "🃈",
    [Rank.SEVEN]: "🃇",
    [Rank.SIX]: "🃆",
    [Rank.FIVE]: "🃅",
    [Rank.FOUR]: "🃄",
    [Rank.THREE]: "🃃",
    [Rank.TWO]: "🃂",
  },
  [Suit.CLUBS]: {
    [Rank.ACE]: "🃑",
    [Rank.KING]: "🃞",
    [Rank.QUEEN]: "🃝",
    [Rank.JACK]: "🃛",
    [Rank.TEN]: "🃚",
    [Rank.NINE]: "🃙",
    [Rank.EIGHT]: "🃘",
    [Rank.SEVEN]: "🃗",
    [Rank.SIX]: "🃖",
    [Rank.FIVE]: "🃕",
    [Rank.FOUR]: "🃔",
    [Rank.THREE]: "🃓",
    [Rank.TWO]: "🃒",
  },
};

// Display order for suits
export const suitOrder: Suit[] = [
  Suit.SPADES,
  Suit.HEARTS,
  Suit.DIAMONDS,
  Suit.CLUBS,
];

// Display order for directions
export const directions: Direction[] = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
];

export { createEmptyHandStruct, createEmptyDealStruct }