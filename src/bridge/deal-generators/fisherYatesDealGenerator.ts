import { Hand, Suit, Rank, RankOrder, Direction} from "../types/enums";
import { DealStruct} from "../types/types";

export function generateDeal(): DealStruct {
  // Initialize an array to represent the deck of cards (52 cards).
  const deck: number[] = Array.from({ length: 52 }, (_, i) => i );
  
  // Shuffle the deck using Fisher-Yates algorithm.
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Deal the shuffled deck to 4 players (13 cards each).
  // Each player is dealt a card one at a time in sequence.
  // North, East, South and west is the default order.
  // Cards in order of rank AKQ

  const hands: DealStruct = {
    [Direction.NORTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.EAST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.SOUTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.WEST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] }
  };

  const directions = Object.values(Direction)

  // Place each card one at a time into an array for each suit in each hand
  // Place each card one at a time into an array for each suit in each hand
  for (let i = 0; i < 52; i++) {
    const card = deck[i]

    const direction : Direction = directions[i % 4];
    const suit : Suit = Object.values(Suit)[Math.floor(card / 13)];
    const rank : Rank = Object.values(Rank)[i % 13];

    hands[direction][suit].push(rank); 
  }

  const sortedHands = sortDeal(hands);
  return sortedHands;
}
export default generateDeal;

// Function to recursively sort all arrays of Rank within the structure
function sortDeal(deal: DealStruct): DealStruct {
  const sortedDeal: DealStruct = {} as DealStruct;

  for (const handKey in deal) {
    const hand = handKey as Hand;
    sortedDeal[hand] = {} as Record<Suit, Rank[]>;

    for (const suitKey in deal[hand]) {
      const suit = suitKey as Suit;
      const ranks = deal[hand][suit];

      // Sort each array of Rank using the custom RankOrder
      sortedDeal[hand][suit] = [...ranks].sort((a, b) => RankOrder[a] - RankOrder[b]);
    }
  }

  return sortedDeal;
}




