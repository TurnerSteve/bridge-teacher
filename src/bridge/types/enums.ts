enum Algo 
{
  FISHERYATES = "Fisher-Yates",
  PARTIAL = "Partial Pavlicek" ,
  HOMEGROWN = "Home Grown",
  NULL = "Null Algo"
}

enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
}
// Probably dont meed Direction and Deal

enum Hand{
  North = Direction.North,
  East = Direction.East,
  South = Direction.South,
  West = Direction.West
}

// Define the enumerated types
enum Vulnerability {
  None = "None",
  NS = "N-S",
  EW = "E-W",
  Both = "Both",
}

enum Dealer {
  North = Direction.North,
  East = Direction.East,
  South = Direction.South,
  West = Direction.West,
}

// Enum for Suits (with suit icons)
enum Suit {
  Spades = "♠",   // Suit symbol for Spades
  Hearts = "\u2665",   // Suit symbol for Hearts
  Diamonds = "♦", // Suit symbol for Diamonds
  Clubs = "♣"     // Suit symbol for Clubs
}

enum Rank {
    ACE = 'A',
    KING = 'K',
    QUEEN = 'Q',
    JACK = 'J',
    TEN = '10',
    NINE = '9',
    EIGHT = '8',
    SEVEN = '7',
    SIX = '6',
    FIVE = '5',
    FOUR = '4',
    THREE = '3',
    TWO = '2'
  }

  // Define the custom order for Rank as a mapping
  // cannot sort enumerated string types by index
const RankOrder: Record<Rank, number> = {
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

export { Rank, Suit, Hand, Direction, Dealer, Vulnerability}
export { RankOrder }
export { Algo } 
