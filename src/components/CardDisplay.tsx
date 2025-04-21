// src/components/CardDisplay.tsx
import Image from 'next/image';
import { Suit, Rank } from '../types/cards';
import { cardIcons } from '../data/cardIcons';
import { cardSVGs } from '../data/cardSVGs';
import { cardUnicode } from '../data/cardUnicode';

type DisplayMode = 'icon' | 'svg' | 'unicode';

interface CardDisplayProps {
  suit: Suit;
  rank: Rank;
  mode: DisplayMode;
  width?: number;   // Optional, default for images/icons
  height?: number;  // Optional, default for images/icons
}

export function CardDisplay({
  suit,
  rank,
  mode,
  width = 100,
  height = 140,
}: CardDisplayProps) {
  if (mode === 'icon') {
    const Icon = cardIcons[suit][rank];
    return <Icon width={width} height={height} />;
  }

  if (mode === 'svg') {
    const svgPath = cardSVGs[suit][rank];
    return (
      <Image
        src={svgPath}
        alt={`${rank} of ${suit}`}
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        priority={false}
      />
    );
  }

  if (mode === 'unicode') {
    return (
      <span style={{ fontSize: `${Math.max(width, height) / 2}px`, display: 'inline-block', width, height, textAlign: 'center', lineHeight: `${height}px` }}>
        {cardUnicode[suit][rank]}
      </span>
    );
  }

  return null;
};