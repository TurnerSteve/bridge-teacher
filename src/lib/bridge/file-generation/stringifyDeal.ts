
import {  Direction, Rank, Suit } from "@/types/cards";
import { DealStruct, HandStruct} from "@/types/structs";
import { Char, FileType, Separators } from "../../../types/bridge";

// Updated stringifyDeal using handSeparator and FileType
export function stringifyDeal(
  deal: DealStruct,
  separators: Separators,
  fileType?: FileType
): string {
  const directions = [
    Direction.NORTH,
    Direction.EAST,
    Direction.SOUTH,
    Direction.WEST,
  ];
  return directions
    .map((direction) => stringifyHand(deal[direction], separators, fileType))
    .join(separators.handSeparator);
}

// Updated stringifyHand using suitSeparator and SuitType
function stringifyHand(
  hand: HandStruct,
  separators: Separators,
  fileType?: FileType
): string {
  const suits = [Suit.SPADES, Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS];
  return suits
    .map((suit) => {
      const suitString = stringifySuit(hand[suit], separators.cardSeparator, fileType)
      return (fileType === FileType.LIN) ? suit[0] + suitString : suitString; // First suit character S,H,D,C
    })
    .join(separators.suitSeparator);
}

// Function to stringify a single suit
function stringifySuit(
  ranks: Rank[],
  cardSeparator: Char,
  fileType?: FileType
): string {
  if (fileType === FileType.PBN && ranks.length === 0) {
    return ""; // Return "-" if suitFormat is PBN and the ranks array is empty
  }
  return ranks.join(cardSeparator); // Join ranks using the provided cardSeparator
}
