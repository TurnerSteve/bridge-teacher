import { Suit, Rank } from '@/types/cards';

// Unicode mapping for standard French deck (no Knights)
export const unicodeCards: Record<Suit, Record<Rank, string>> = {
  [Suit.SPADES]: {
    [Rank.ACE]: '🂡',
    [Rank.KING]: '🂮',
    [Rank.QUEEN]: '🂭',
    [Rank.JACK]: '🂫',
    [Rank.TEN]: '🂪',
    [Rank.NINE]: '🂩',
    [Rank.EIGHT]: '🂨',
    [Rank.SEVEN]: '🂧',
    [Rank.SIX]: '🂦',
    [Rank.FIVE]: '🂥',
    [Rank.FOUR]: '🂤',
    [Rank.THREE]: '🂣',
    [Rank.TWO]: '🂢',
  },
  [Suit.HEARTS]: {
    [Rank.ACE]: '🂱',
    [Rank.KING]: '🂾',
    [Rank.QUEEN]: '🂽',
    [Rank.JACK]: '🂻',
    [Rank.TEN]: '🂺',
    [Rank.NINE]: '🂹',
    [Rank.EIGHT]: '🂸',
    [Rank.SEVEN]: '🂷',
    [Rank.SIX]: '🂶',
    [Rank.FIVE]: '🂵',
    [Rank.FOUR]: '🂴',
    [Rank.THREE]: '🂳',
    [Rank.TWO]: '🂲',
  },
  [Suit.DIAMONDS]: {
    [Rank.ACE]: '🃁',
    [Rank.KING]: '🃎',
    [Rank.QUEEN]: '🃍',
    [Rank.JACK]: '🃋',
    [Rank.TEN]: '🃊',
    [Rank.NINE]: '🃉',
    [Rank.EIGHT]: '🃈',
    [Rank.SEVEN]: '🃇',
    [Rank.SIX]: '🃆',
    [Rank.FIVE]: '🃅',
    [Rank.FOUR]: '🃄',
    [Rank.THREE]: '🃃',
    [Rank.TWO]: '🃂',
  },
  [Suit.CLUBS]: {
    [Rank.ACE]: '🃑',
    [Rank.KING]: '🃞',
    [Rank.QUEEN]: '🃝',
    [Rank.JACK]: '🃛',
    [Rank.TEN]: '🃚',
    [Rank.NINE]: '🃙',
    [Rank.EIGHT]: '🃘',
    [Rank.SEVEN]: '🃗',
    [Rank.SIX]: '🃖',
    [Rank.FIVE]: '🃕',
    [Rank.FOUR]: '🃔',
    [Rank.THREE]: '🃓',
    [Rank.TWO]: '🃒',
  },
};
