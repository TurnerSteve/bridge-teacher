'use client';

import { HandStruct } from '@/types/structs';
import { CardRenderer } from '@/components/CardRenderer';
import { Direction, DisplayMode, Suit } from '@/types/cards';
import { suitOrder, suitSymbols } from '@/types/constants';

interface HandRendererProps {
  hand: HandStruct;
  displayMode: DisplayMode;
  direction: Direction;
  cardSize?: number;
}

export function HandRenderer({
  hand,
  displayMode,
  direction,
  cardSize = 40,
}: HandRendererProps) {
  return (
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
        {direction}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {suitOrder.map((suit) => (
          <div key={suit} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
           {displayMode === DisplayMode.TEXT && (
              <span style={{
                width: 16,
                textAlign: 'center',
                color: suit === Suit.HEARTS || suit === Suit.DIAMONDS ? 'red' : 'black',
                fontWeight: 'bold'
              }}>
                {suitSymbols[suit]}
              </span>
            )}
            <div style={{ display: 'flex', gap: 0 }}>
              {hand[suit].map((rank) => (
                <CardRenderer
                  key={`${suit}-${rank}`}
                  suit={suit}
                  rank={rank}
                  displayMode={displayMode}
                  size={cardSize}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
