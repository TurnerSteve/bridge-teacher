// Define an enumerated type for file types
export { FileType, Char}
export type { Separators } ;

enum FileType {
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

// Updated Separators type to use the enumerated SeparatorType
interface Separators {
    handSeparator: Char;
    suitSeparator: Char;
    cardSeparator: Char;
  }

// Define an enumerated type for separators
enum Char {
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