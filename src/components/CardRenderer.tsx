"use client";

import Image from "next/image";
import { Suit, Rank, DisplayMode } from "@/types/cards";
import { bridgeIcons } from "@/lib/reactIconCards";
import { getImageFileName } from "@/lib/getImageFileName";
import { unicodeCards } from "@/lib/unicodeCards";
import { IconType } from "react-icons";

interface CardRendererProps {
  suit: Suit;
  rank: Rank;
  displayMode: DisplayMode;
  size?: number;
}

export function CardRenderer({
  suit,
  rank,
  displayMode,
  size = 25,
}: CardRendererProps) {

  switch (displayMode) {
    case DisplayMode.TEXT: // Text although we have a symbol for the suit
      return <span className="font-mono">{rank}</span>;

    case DisplayMode.IMAGE:
      return (
        <span
        className="relative overflow-hidden"
        style={{
          display: "inline-block",
          width: size,
          aspectRatio: "2 / 3", // or use Tailwind: aspect-[2/3]
        }}
      >
        <Image
          src={getImageFileName(suit, rank)}
          alt={`${rank} of ${suit}`}
          fill
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          sizes={`${size}px`}
        />
      </span>
      )
      ;

      case DisplayMode.ICON: {
        const Icon : IconType = bridgeIcons[suit][rank];
        return (
          <Icon
            size={size}
            color={suit === Suit.HEARTS || suit === Suit.DIAMONDS ? "#c00" : "#222"}
            style={{ verticalAlign: "middle" }}
          />
        );
      }
    
      case DisplayMode.SYMBOL: {
        // Define color based on suit
        const isRed = suit === Suit.HEARTS || suit === Suit.DIAMONDS;
        const color = isRed ? '#c00' : '#222'; // red or black
        const background = '#eee'; // light grey
      
        return (
          <span
            style={{
              display: 'inline-block',
              fontSize: size,
              background,
              color,
              padding: '0',
              borderRadius: 4,
              fontFamily: 'Segoe UI Symbol, Noto Color Emoji, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI", "Arial Unicode MS", "Arial", sans-serif',
              lineHeight: 1,
              verticalAlign: 'middle',
            }}
          >
            {unicodeCards[suit][rank]}
          </span>
        );
      }

    default:
      return <span>?</span>;
  }
}
