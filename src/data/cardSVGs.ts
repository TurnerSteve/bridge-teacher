// src/data/cardSVGs.ts

import { Rank, Suit } from "@/types/cards";

// 52 SVG's from Mat Cain / Chris Aguilar

export const cardSVGs: Record<Suit, Record<Rank, string>> = {
  [Suit.SPADES]: {
    [Rank.ACE]: '/cards/ace_of_spades.svg',
    [Rank.TWO]: '/cards/2_of_spades.svg',
    [Rank.THREE]: '/cards/3_of_spades.svg',
    [Rank.FOUR]: '/cards/4_of_spades.svg',
    [Rank.FIVE]: '/cards/5_of_spades.svg',
    [Rank.SIX]: '/cards/6_of_spades.svg',
    [Rank.SEVEN]: '/cards/7_of_spades.svg',
    [Rank.EIGHT]: '/cards/8_of_spades.svg',
    [Rank.NINE]: '/cards/9_of_spades.svg',
    [Rank.TEN]: '/cards/10_of_spades.svg',
    [Rank.JACK]: '/cards/jack_of_spades.svg',
    [Rank.QUEEN]: '/cards/queen_of_spades.svg',
    [Rank.KING]: '/cards/king_of_spades.svg',
  },
  [Suit.HEARTS]: {
    [Rank.ACE]: '/cards/ace_of_hearts.svg',
    [Rank.TWO]: '/cards/2_of_hearts.svg',
    [Rank.THREE]: '/cards/3_of_hearts.svg',
    [Rank.FOUR]: '/cards/4_of_hearts.svg',
    [Rank.FIVE]: '/cards/5_of_hearts.svg',
    [Rank.SIX]: '/cards/6_of_hearts.svg',
    [Rank.SEVEN]: '/cards/7_of_hearts.svg',
    [Rank.EIGHT]: '/cards/8_of_hearts.svg',
    [Rank.NINE]: '/cards/9_of_hearts.svg',
    [Rank.TEN]: '/cards/10_of_hearts.svg',
    [Rank.JACK]: '/cards/jack_of_hearts.svg',
    [Rank.QUEEN]: '/cards/queen_of_hearts.svg',
    [Rank.KING]: '/cards/king_of_hearts.svg',
  },
  [Suit.DIAMONDS]: {
    [Rank.ACE]: '/cards/ace_of_diamonds.svg',
    [Rank.TWO]: '/cards/2_of_diamonds.svg',
    [Rank.THREE]: '/cards/3_of_diamonds.svg',
    [Rank.FOUR]: '/cards/4_of_diamonds.svg',
    [Rank.FIVE]: '/cards/5_of_diamonds.svg',
    [Rank.SIX]: '/cards/6_of_diamonds.svg',
    [Rank.SEVEN]: '/cards/7_of_diamonds.svg',
    [Rank.EIGHT]: '/cards/8_of_diamonds.svg',
    [Rank.NINE]: '/cards/9_of_diamonds.svg',
    [Rank.TEN]: '/cards/10_of_diamonds.svg',
    [Rank.JACK]: '/cards/jack_of_diamonds.svg',
    [Rank.QUEEN]: '/cards/queen_of_diamonds.svg',
    [Rank.KING]: '/cards/king_of_diamonds.svg',
  },
  [Suit.CLUBS]: {
    [Rank.ACE]: '/cards/ace_of_clubs.svg',
    [Rank.TWO]: '/cards/2_of_clubs.svg',
    [Rank.THREE]: '/cards/3_of_clubs.svg',
    [Rank.FOUR]: '/cards/4_of_clubs.svg',
    [Rank.FIVE]: '/cards/5_of_clubs.svg',
    [Rank.SIX]: '/cards/6_of_clubs.svg',
    [Rank.SEVEN]: '/cards/7_of_clubs.svg',
    [Rank.EIGHT]: '/cards/8_of_clubs.svg',
    [Rank.NINE]: '/cards/9_of_clubs.svg',
    [Rank.TEN]: '/cards/10_of_clubs.svg',
    [Rank.JACK]: '/cards/jack_of_clubs.svg',
    [Rank.QUEEN]: '/cards/queen_of_clubs.svg',
    [Rank.KING]: '/cards/king_of_clubs.svg',
  },
};

