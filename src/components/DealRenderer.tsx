'use client';
import { DealStruct } from '@/types/structs';
import { HandRenderer } from '@/components/HandRenderer';
import { Direction, DisplayMode } from '@/types/cards';

interface DealRendererProps {
  deal: DealStruct;
  displayMode: DisplayMode;
  cardSize?: number;
}

export function DealRenderer({
  deal,
  displayMode,
  cardSize = 40,
}: DealRendererProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr auto 1fr',
        gap: 16,
        alignItems: 'center',
        justifyItems: 'center',
        minHeight: 400,
        minWidth: 500,
      }}
    >
      {/* North (top-center) */}
      <div style={{ gridRow: 1, gridColumn: 2 }}>
        <HandRenderer
          hand={deal[Direction.NORTH]}
          displayMode={displayMode}
          direction={Direction.NORTH}
          cardSize={cardSize}
        />
      </div>
      {/* West (middle-left) */}
      <div style={{ gridRow: 2, gridColumn: 1 }}>
        <HandRenderer
          hand={deal[Direction.WEST]}
          displayMode={displayMode}
          direction={Direction.WEST}
          cardSize={cardSize}
        />
      </div>
      {/* East (middle-right) */}
      <div style={{ gridRow: 2, gridColumn: 3 }}>
        <HandRenderer
          hand={deal[Direction.EAST]}
          displayMode={displayMode}
          direction={Direction.EAST}
          cardSize={cardSize}
        />
      </div>
      {/* South (bottom-center) */}
      <div style={{ gridRow: 3, gridColumn: 2 }}>
        <HandRenderer
          hand={deal[Direction.SOUTH]}
          displayMode={displayMode}
          direction={Direction.SOUTH}
          cardSize={cardSize}
        />
      </div>
    </div>
  );
}
