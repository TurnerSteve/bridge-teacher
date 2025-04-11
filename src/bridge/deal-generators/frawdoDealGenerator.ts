import { Algo, Direction, Rank, Suit } from "@/bridge/types/enums";
import { DealStruct} from "@/bridge/types/types";
import { DealResult } from "@/components/Deal";

// Function to generate a random bridge deal
function generateDeal(slots : number[]): DealResult {
  // Initialize an array to represent the deck of cards (52 cards).
  // Need to check slots are n1=n2=n3=n4 ()
  // Otherwise default to 13 each for a full pack

  let description = `N,S,E,W dealing algorithm for ${slots} cards per player`
  let slotTotal = slots[0] * 4 ; 

  if (slots[0] !!= slots[1] || slots[1] !!= slots[2] ||  slots[2] !!= slots[3]) {
    slots = [13,13,13,13] ; // Default if something wrong
    slotTotal = 52 ;
    description =  `Bad distribution: defaulting to N,S,E,W dealing algorithm for ${slots} cards per player `;
  }

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
  const algo = Algo.NSEW ;

  return ({algo : algo, description : description, deal : hands});
}

export default generateDeal