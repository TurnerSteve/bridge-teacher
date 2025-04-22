import { Suit, Rank } from '@/types/cards'; // Adjust path as needed

// Map enum values to proper filename parts
const rankToName: Record<Rank, string> = {
  [Rank.ACE]: 'Ace',
  [Rank.KING]: 'King',
  [Rank.QUEEN]: 'Queen',
  [Rank.JACK]: 'Jack',
  [Rank.TEN]: '10',
  [Rank.NINE]: '9',
  [Rank.EIGHT]: '8',
  [Rank.SEVEN]: '7',
  [Rank.SIX]: '6',
  [Rank.FIVE]: '5',
  [Rank.FOUR]: '4',
  [Rank.THREE]: '3',
  [Rank.TWO]: '2',
};

export function getImageFileName(suit: Suit, rank: Rank): string {
  const suitName = suit.toLowerCase(); // e.g., "clubs"
  const rankName = rankToName[rank];   // e.g., "King" or "8"
  return `/cards/${rankName.toLowerCase()}_of_${suitName}.svg`;
}
