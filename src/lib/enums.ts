export { Rank, Suit, Direction, Vulnerability}
export { Algo }

enum Algo 
{
  FISHERYATES = "Fisher-Yates",
  PARTIAL = "Pavlicek" ,
  HOMEGROWN = "Home Grown",
}

enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}
// enum DirectionString {
//   North = "North",
//   East = "East",
//   South = "South",
//   West = "West"
// }

// enum Hand{
//   North = CompassPoint.North,
//   East = CompassPoint.East,
//   South = CompassPoint.South,
//   West = CompassPoint.West
// }

// enum Dealer {
//   North = Direction.North,
//   East = Direction.East,
//   South = Direction.South,
//   West = Direction.West,
// }

// Define the enumerated types
enum Vulnerability {
  None = "None",
  NS = "NS",
  EW = "EW",
  Both = "All",
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

  // Define an enumerated type for all 52 cards with Unicode characters
export enum Cards {
  // Spades
  AceOfSpades = "🂡", // U+1F0A1
  TwoOfSpades = "🂢", // U+1F0A2
  ThreeOfSpades = "🂣", // U+1F0A3
  FourOfSpades = "🂤", // U+1F0A4
  FiveOfSpades = "🂥", // U+1F0A5
  SixOfSpades = "🂦", // U+1F0A6
  SevenOfSpades = "🂧", // U+1F0A7
  EightOfSpades = "🂨", // U+1F0A8
  NineOfSpades = "🂩", // U+1F0A9
  TenOfSpades = "🂪", // U+1F0AA
  JackOfSpades = "🂫", // U+1F0AB
  QueenOfSpades = "🂭", // U+1F0AD
  KingOfSpades = "🂮", // U+1F0AE

  // Hearts
  AceOfHearts = "🂱", // U+1F0B1
  TwoOfHearts = "🂲", // U+1F0B2
  ThreeOfHearts = "🂳", // U+1F0B3
  FourOfHearts = "🂴", // U+1F0B4
  FiveOfHearts = "🂵", // U+1F0B5
  SixOfHearts = "🂶", // U+1F0B6
  SevenOfHearts = "🂷", // U+1F0B7
  EightOfHearts = "🂸", // U+1F0B8
  NineOfHearts = "🂹", // U+1F0B9
  TenOfHearts = "🂺", // U+1F0BA
  JackOfHearts = "🂻", // U+1F0BB
  QueenOfHearts = "🂽", // U+1F0BD
  KingOfHearts = "🂾", // U+1F0BE

  // Diamonds
  AceOfDiamonds = "🃁", // U+1F0C1
  TwoOfDiamonds = "🃂", // U+1F0C2
  ThreeOfDiamonds = "🃃", // U+1F0C3
  FourOfDiamonds = "🃄", // U+1F0C4
  FiveOfDiamonds = "🃅", // U+1F0C5
  SixOfDiamonds = "🃆", // U+1F0C6
  SevenOfDiamonds = "🃇", // U+1F0C7
  EightOfDiamonds = "🃈", // U+1F0C8
  NineOfDiamonds = "🃉", // U+1F0C9
  TenOfDiamonds = "🃊", // U+1F0CA
  JackOfDiamonds = "🃋", // U+1F0CB
  QueenOfDiamonds = "🃍", // U+1F0CD
  KingOfDiamonds = "🃎", // U+1F0CE

  // Clubs
  AceOfClubs = "🃑", // U+1F0D1
  TwoOfClubs = "🃒", // U+1F0D2
  ThreeOfClubs = "🃓", // U+1F0D3
  FourOfClubs = "🃔", // U+1F0D4
  FiveOfClubs = "🃕", // U+1F0D5
  SixOfClubs = "🃖", // U+1F0D6
  SevenOfClubs = "🃗", // U+1F0D7
  EightOfClubs = "🃘", // U+1F0D8
  NineOfClubs = "🃙", // U+1F0D9
  TenOfClubs = "🃚", // U+1F0DA
  JackOfClubs = "🃛", // U+1F0DB
  QueenOfClubs = "🃝", // U+1F0DD
  KingOfClubs = "🃞", // U+1F0DE
}
 
