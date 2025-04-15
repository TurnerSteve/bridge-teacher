enum Algo 
{
  FISHERYATES = "Fisher-Yates",
  PARTIAL = "Partial Pavlicek" ,
  HOMEGROWN = "Home Grown",
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

enum Dealer {
  North = Direction.North,
  East = Direction.East,
  South = Direction.South,
  West = Direction.West,
}


// Define the enumerated types
enum Vulnerability {
  None = "None",
  NS = "N-S",
  EW = "E-W",
  Both = "Both",
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

export { Rank, Suit, Hand, Direction, Dealer, Vulnerability}
export { Algo } 
