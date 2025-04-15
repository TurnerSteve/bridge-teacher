// An array representing all 52 cards in the deck
const cards = [
    // Spades
    { index: 0, name: "Ace of Spades", unicode: "🂡", shortCode: "AS", suit: "Spades", value: 1 },
    { index: 1, name: "King of Spades", unicode: "🂮", shortCode: "KS", suit: "Spades", value: 13 },
    { index: 2, name: "Queen of Spades", unicode: "🂭", shortCode: "QS", suit: "Spades", value: 12 },
    { index: 3, name: "Jack of Spades", unicode: "🂫", shortCode: "JS", suit: "Spades", value: 11 },
    { index: 4, name: "10 of Spades", unicode: "🂪", shortCode: "10S", suit: "Spades", value: 10 },
    { index: 5, name: "9 of Spades", unicode: "🂩", shortCode: "9S", suit: "Spades", value: 9 },
    { index: 6, name: "8 of Spades", unicode: "🂨", shortCode: "8S", suit: "Spades", value: 8 },
    { index: 7, name: "7 of Spades", unicode: "🂧", shortCode: "7S", suit: "Spades", value: 7 },
    { index: 8, name: "6 of Spades", unicode: "🂦", shortCode: "6S", suit: "Spades", value: 6 },
    { index: 9, name: "5 of Spades", unicode: "🂥", shortCode: "5S", suit: "Spades", value: 5 },
    { index: 10, name: "4 of Spades", unicode: "🂤", shortCode: "4S", suit: "Spades", value: 4 },
    { index: 11, name: "3 of Spades", unicode: "🂣", shortCode: "3S", suit: "Spades", value: 3 },
    { index: 12, name: "2 of Spades", unicode: "🂢", shortCode: "2S", suit: "Spades", value: 2 },
  
    // Hearts
    { index: 13, name: "Ace of Hearts", unicode: "🂱", shortCode: "AH", suit: "Hearts", value: 1 },
    { index: 14, name: "King of Hearts", unicode: "🂾", shortCode: "KH", suit: "Hearts", value: 13 },
    { index: 15, name: "Queen of Hearts", unicode: "🂽", shortCode: "QH", suit: "Hearts", value: 12 },
    { index: 16, name: "Jack of Hearts", unicode: "🂻", shortCode: "JH", suit: "Hearts", value: 11 },
    { index: 17, name: "10 of Hearts", unicode: "🂺", shortCode: "10H", suit: "Hearts", value: 10 },
    { index: 18, name: "9 of Hearts", unicode: "🂹", shortCode: "9H", suit: "Hearts", value: 9 },
    { index: 19, name: "8 of Hearts", unicode: "🂸", shortCode: "8H", suit: "Hearts", value: 8 },
    { index: 20, name: "7 of Hearts", unicode: "🂷", shortCode: "7H", suit: "Hearts", value: 7 },
    { index: 21, name: "6 of Hearts", unicode: "🂶", shortCode: "6H", suit: "Hearts", value: 6 },
    { index: 22, name: "5 of Hearts", unicode: "🂵", shortCode: "5H", suit: "Hearts", value: 5 },
    { index: 23, name: "4 of Hearts", unicode: "🂴", shortCode: "4H", suit: "Hearts", value: 4 },
    { index: 24, name: "3 of Hearts", unicode: "🂳", shortCode: "3H", suit: "Hearts", value: 3 },
    { index: 25, name: "2 of Hearts", unicode: "🂲", shortCode: "2H", suit: "Hearts", value: 2 },
  
    // Diamonds
    { index: 26, name: "Ace of Diamonds", unicode: "🃁", shortCode: "AD", suit: "Diamonds", value: 1 },
    { index: 27, name: "King of Diamonds", unicode: "🃎", shortCode: "KD", suit: "Diamonds", value: 13 },
    { index: 28, name: "Queen of Diamonds", unicode: "🃍", shortCode: "QD", suit: "Diamonds", value: 12 },
    { index: 29, name: "Jack of Diamonds", unicode: "🃋", shortCode: "JD", suit: "Diamonds", value: 11 },
    { index: 30, name: "10 of Diamonds", unicode: "🃊", shortCode: "10D", suit: "Diamonds", value: 10 },
    { index: 31, name: "9 of Diamonds", unicode: "🃉", shortCode: "9D", suit: "Diamonds", value: 9 },
    { index: 32, name: "8 of Diamonds", unicode: "🃈", shortCode: "8D", suit: "Diamonds", value: 8 },
    { index: 33, name: "7 of Diamonds", unicode: "🃇", shortCode: "7D", suit: "Diamonds", value: 7 },
    { index: 34, name: "6 of Diamonds", unicode: "🃆", shortCode: "6D", suit: "Diamonds", value: 6 },
    { index: 35, name: "5 of Diamonds", unicode: "🃅", shortCode: "5D", suit: "Diamonds", value: 5 },
    { index: 36, name: "4 of Diamonds", unicode: "🃄", shortCode: "4D", suit: "Diamonds", value: 4 },
    { index: 37, name: "3 of Diamonds", unicode: "🃃", shortCode: "3D", suit: "Diamonds", value: 3 },
    { index: 38, name: "2 of Diamonds", unicode: "🃂", shortCode: "2D", suit: "Diamonds", value: 2 },
  
    // Clubs
    { index: 39, name: "Ace of Clubs", unicode: "🃑", shortCode: "AC", suit: "Clubs", value: 1 },
    { index: 40, name: "King of Clubs", unicode: "🃞", shortCode: "KC", suit: "Clubs", value: 13 },
    { index: 41, name: "Queen of Clubs", unicode: "🃝", shortCode: "QC", suit: "Clubs", value: 12 },
    { index: 42, name: "Jack of Clubs", unicode: "🃛", shortCode: "JC", suit: "Clubs", value: 11 },
    { index: 43, name: "10 of Clubs", unicode: "🃚", shortCode: "10C", suit: "Clubs", value: 10 },
    { index: 44, name: "9 of Clubs", unicode: "🃙", shortCode: "9C", suit: "Clubs", value: 9 },
    { index: 45, name: "8 of Clubs", unicode: "🃘", shortCode: "8C", suit: "Clubs", value: 8 },
    { index: 46, name: "7 of Clubs", unicode: "🃗", shortCode: "7C", suit: "Clubs", value: 7 },
    { index: 47, name: "6 of Clubs", unicode: "🃖", shortCode: "6C", suit: "Clubs", value: 6 },
    { index: 48, name: "5 of Clubs", unicode: "🃕", shortCode: "5C", suit: "Clubs", value: 5 },
    { index: 49, name: "4 of Clubs", unicode: "🃔", shortCode: "4C", suit: "Clubs", value: 4 },
    { index: 50, name: "3 of Clubs", unicode: "🃓", shortCode: "3C", suit: "Clubs", value: 3 },
    { index: 51, name: "2 of Clubs", unicode: "🃒", shortCode: "2C", suit: "Clubs", value: 2 },
  ];
  
  export default cards;