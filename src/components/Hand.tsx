import { Suit, Rank } from '../bridge/types/enums';
import SuitComponent from './Suit';
import { Card } from './ui/card';   // Shadcn card

interface HandProps {
  direction: string;
  hand: { [key in Suit]: Rank[] };
}

function HandComponent({ direction, hand }: HandProps) {
  return (
    <Card className="p-4 w-full max-w-md">
      <h2 className="font-light text-sm mb-0">{direction}</h2>
      <div className="space-y-0">
        {Object.entries(hand).map(([suit, cards]) => (
          <SuitComponent key={suit} suit={suit as Suit} cards={cards} />
        ))}
      </div>
    </Card>
  );
}

export default HandComponent;