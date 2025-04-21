export { Rank, Suit, Direction, Vulnerability}
export { Algo }

enum Algo 
{
  FISHERYATES = "Fisher-Yates",
  PARTIAL = "Pavlicek" ,
  HOMEGROWN = "Home Grown",
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


// Define an enumerated type for separators
export enum Char {
  NONE = "",
  COMMA = ",",
  PIPE = "|",
  SPACE = " ",
  DOT = ".",
  DASH = "-",
  SLASH = "/",
  COLON = ":",
  SEMICOLON = ";",
  UNDERLINE = "_",
  EQUAL = "=",
  PLUS = "+",
  ASTERISK = "*",
  EXCLAMATION = "!",
  AT = "@",
  PERCENT = "%",

}

// Define an enumerated type for file types
export enum FileType {
  PBN = "PBN",
  LIN = "LIN",
  CSV = "CSV",
  XML = "XML",
  TXT = "TXT",
  JSON = "JSON",
  DGE = "DGE",
  BRI = "BRI",
  DUP = "DUP"
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

