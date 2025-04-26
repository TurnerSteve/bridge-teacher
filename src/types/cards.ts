export { Rank, Suit, Vulnerability, Direction}
export { DeckView };

enum DeckView 
{
  TEXT   = "text" ,      // Plain text A,K,Q,J,10 etc
  ICON   = "icon" ,     // unicode
  SYMBOL = "symbol" ,   // react icon
  IMAGE  = "image"      // svg
}

enum Direction {
  NORTH = "North",
  EAST = "East",
  SOUTH = "South",
  WEST = "West"
}

// Define the enumerated types
enum Vulnerability {
  NONE = "None",
  NS = "NS",
  EW = "EW",
  ALL = "All",
}

// Enum for Suits (with suit icons)
enum Suit {
  SPADES = "Spades",   // Suit symbol for Spades
  HEARTS = "Hearts",   // Suit symbol for Hearts
  DIAMONDS = "Diamonds", // Suit symbol for Diamonds
  CLUBS = "Clubs"     // Suit symbol for Clubs
}



enum Rank {
    ACE = 'A',
    KING = 'K',
    QUEEN = 'Q',
    JACK = 'J',
    TEN = 'T',
    NINE = '9',
    EIGHT = '8',
    SEVEN = '7',
    SIX = '6',
    FIVE = '5',
    FOUR = '4',
    THREE = '3',
    TWO = '2'
  }

