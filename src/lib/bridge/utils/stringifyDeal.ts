import { Direction, Rank, Suit } from "@/lib/enums";
import { DealStruct, HandStruct, Separators, SuitFormat } from "@/lib/types";

// Updated stringifyDeal using handSeparator
export function stringifyDeal(
  deal: DealStruct,
  separators: Separators,
  suitFormat?: SuitFormat,
): string {
  const directions = [
    Direction.North,
    Direction.East,
    Direction.South,
    Direction.West,
  ];
  return directions
    .map((direction) => stringifyHand(deal[direction], separators, suitFormat))
    .join(separators.handSeparator);
}

// Updated stringifyHand using suitSeparator
function stringifyHand(
  hand: HandStruct,
  separators: Separators,
  suitFormat?: SuitFormat
): string {
  const suits = [Suit.Spades, Suit.Hearts, Suit.Diamonds, Suit.Clubs];
  return suits
    .map((suit) =>
      stringifySuit(hand[suit], separators.cardSeparator, suitFormat)
    )
    .join(separators.suitSeparator);
}

// Function to stringify a single suit
function stringifySuit(
  ranks: Rank[],
  cardSeparator: string,
  suitFormat?: SuitFormat
): string {
  if (suitFormat === "PBN" && ranks.length === 0) {
    return "-"; // Return "-" if suitFormat is PBN and the ranks array is empty
  }
  return ranks.join(cardSeparator); // Join ranks using the provided cardSeparator
}
