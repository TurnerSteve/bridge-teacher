import { Direction, Rank, Suit } from "@/bridge/types/enums";
import { DealStruct} from "@/bridge/types/types";

// Function to generate a random bridge deal
function generateDeal(slots : number[]): DealStruct {
  // Create a nx4-element array and fill it with 13 of each direction randomly
  
  const slotTotal = slots.reduce((acc, val) => acc + val, 0);

  const directions : Direction[]  = Array(slotTotal).fill(null).map((_, i) => Object.values(Direction)[Math.floor(i / 13)]);
  const shuffledDirections : Direction[] = directions.sort(() => Math.random() - 0.5);

  const hands: DealStruct = {
    [Direction.NORTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.EAST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.SOUTH]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] },
    [Direction.WEST]: { [Suit.SPADES]: [], [Suit.HEARTS]: [], [Suit.DIAMONDS]: [], [Suit.CLUBS]: [] }
  };
  // Map card numbers to Rank enum values
  // const rankMap : Rank[] = [
  //   Rank.ACE, Rank.KING, Rank.QUEEN, Rank.JACK, Rank.TEN,
  //   Rank.NINE, Rank.EIGHT, Rank.SEVEN, Rank.SIX,
  //   Rank.FIVE, Rank.FOUR, Rank.THREE, Rank.TWO
  // ];

  // Place each card one at a time into an array for each suit in each hand
  for (let i = 0; i < slotTotal; i++) {
    const direction : Direction = shuffledDirections[i];
    const suit : Suit = Object.values(Suit)[Math.floor(i / 13)];
    const rank : Rank = Object.values(Rank)[i % 13];

    hands[direction][suit].push(rank);
  }

  return hands;
}

export default generateDeal ;