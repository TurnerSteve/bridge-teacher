import { createEmptyDealStruct, RankOrder } from "@/lib/constants";
import { Algo, Suit, Rank, Direction } from "@/lib/enums";
import { DealResult, DealStruct } from "@/lib/types";

export function generateDeal(slots: number[]): DealResult {
  // Initialize an array to represent the deck of cards (up to) 52 cards).
  // Need to check slots (cards dealt to each player) are n1=n2=n3=n4
  // Otherwise default to 13 each for a full pack

  // assumes all slots the same so we  can perform the algo.
  let description = "Fisher Yates Algo dealer. ";

  const slotTotal = slots[0] + slots[1] + slots[2] + slots[3];
  if (slotTotal < 52 || slotTotal > 52)
    description += `Cannot deal [${slots}].`;
  else if (
    slots[0] !== slots[1] ||
    slots[1] !== slots[2] ||
    slots[2] !== slots[3]
  )
    description += `Cannot deal [${slots}].`;
  else description += `Partial deal [${slots}].`;

  console.log(description);

  const deck: number[] = Array.from({ length: slotTotal }, (_, i) => i);

  // Shuffle the deck using Fisher-Yates algorithm.
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Deal the shuffled deck to 4 players (13 cards each).
  // Each player is dealt a card one at a time in sequence.
  // North, East, South and west is the default order.
  // Cards in order of rank AKQ

  const hands: DealStruct = createEmptyDealStruct();

  const directions = Object.values(Direction);

  // Place each card one at a time into an array for each suit in each hand
  for (let i = 0; i < slotTotal; i++) {
    const card = deck[i];

    const direction: Direction = directions[i % 4];
    const suit: Suit = Object.values(Suit)[Math.floor(card / 13)];
    const rank: Rank = Object.values(Rank)[i % 13];

    hands[direction][suit].push(rank);
  }

  const sortedHands = sortDeal(hands);

  return {
    algo: Algo.FISHERYATES,
    description: description,
    deal: sortedHands,
  };
}
export default generateDeal;

// Function to recursively sort all arrays of Rank within the structure
function sortDeal(deal: DealStruct): DealStruct {
  const sortedDeal: DealStruct = {} as DealStruct;

  for (const handKey in deal) {
    const hand = handKey as Direction;
    sortedDeal[hand] = {} as Record<Suit, Rank[]>;

    for (const suitKey in deal[hand]) {
      const suit = suitKey as Suit;
      const ranks = deal[hand][suit];

      // Sort each array of Rank using the custom RankOrder
      sortedDeal[hand][suit] = [...ranks].sort(
        (a, b) => RankOrder[a] - RankOrder[b]
      );
    }
  }

  return sortedDeal;
}
