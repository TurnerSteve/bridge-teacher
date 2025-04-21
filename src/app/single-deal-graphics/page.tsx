
"use client"
import { useGlobalData } from "@/context/DataContextProvider";
import { directions, suitOrder, suitSymbols } from "@/types/constants";
import { cardUnicode} from "@/data/cardUnicode";

import { Rank, Suit } from "@/types/cards";
import { HandStruct} from "@/types/structs";

// 1. Simple text hand
function SimpleTextHand(props: { hand: HandStruct }) {
  const { hand } = props;
  return (
    <div>
      {suitOrder.map((suit) => (
        <div key={suit}>
          <span
            style={{
              color:
                suit === Suit.HEARTS || suit === Suit.DIAMONDS ? "red" : "black",
              fontWeight: "bold",
            }}
          >
            {suitSymbols[suit]}
          </span>{" "}
          {hand[suit].join(" ")}
        </div>
      ))}
    </div>
  );
}

// 2. Icon hand
function IconHand(props: { hand: HandStruct }) {
  const { hand } = props;
  return (
    <div>
      {suitOrder.map((suit) => (
        <div key={suit}>
          <span
            style={{
              color:
                suit === Suit.HEARTS || suit === Suit.DIAMONDS ? "red" : "black",
              fontWeight: "bold",
            }}
          >
            {suitSymbols[suit]}
          </span>{" "}
          {hand[suit].map((rank) => (
            <span
              key={rank}
              style={{ fontSize: "1.6em", marginRight: 3, verticalAlign: "middle" }}
            >
              {cardUnicode[suit][rank]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// 3. Fan hand (Unicode demo; replace with images for high-res)
function FanHand(props: { hand: HandStruct }) {
  const { hand } = props;
  const cards: { suit: Suit; rank: Rank }[] = [];
  suitOrder.forEach((suit) => {
    hand[suit].forEach((rank) => {
      cards.push({ suit, rank });
    });
  });

  return (
    <div style={{ position: "relative", height: 90, width: 220, margin: "1em auto" }}>
      {cards.map((card, i) => {
        const angle = -40 + (80 / (cards.length - 1)) * i;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: "90px",
              top: "20px",
              transform: `rotate(${angle}deg) translateX(-50%)`,
              fontSize: "2.3em",
              zIndex: i,
              color:
                card.suit === Suit.HEARTS || card.suit === Suit.DIAMONDS
                  ? "red"
                  : "black",
              pointerEvents: "none",
              textShadow: "0 2px 6px #aaa",
            }}
            title={`${card.rank} of ${card.suit}`}
          >
            {cardUnicode[card.suit][card.rank]}
          </span>
        );
      })}
    </div>
  );
}

// // Main display component
// type DealDisplayProps = {
//   storedDeal: StoredDeal;
// };

export default function DealDisplay() {  //props: DealDisplayProps

  const { storedDeal } = useGlobalData();

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "2em auto" }}>
      <h2>Bridge Deal #{storedDeal.dealId}</h2>
      <p>{storedDeal.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
        {directions.map((dir) => (
          <div
            key={dir}
            style={{
              flex: 1,
              minWidth: 180,
              background: "#f5f5f5",
              borderRadius: 8,
              padding: 10,
            }}
          >
            <h3 style={{ textAlign: "center" }}>{dir}</h3>
            <h4>Simple Text</h4>
            <SimpleTextHand hand={storedDeal.deal[dir]} />
            <h4>Card Icons</h4>
            <IconHand hand={storedDeal.deal[dir]} />
            <h4>Hand Fan</h4>
            <FanHand hand={storedDeal.deal[dir]} />
          </div>
        ))}
      </div>
    </div>
  );
}
