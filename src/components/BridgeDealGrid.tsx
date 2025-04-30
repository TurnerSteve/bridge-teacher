import React from "react";

interface BridgeDealGridProps {
  north: React.ReactNode;
  east: React.ReactNode;
  south: React.ReactNode;
  west: React.ReactNode;
  center: React.ReactNode; // Vulnerability & Dealer
  redealButton?: React.ReactNode;
  infoTopLeft?: React.ReactNode;
  infoTopRight?: React.ReactNode;
  infoBottomLeft?: React.ReactNode;
  infoBottomRight?: React.ReactNode;
}

export function BridgeDealGrid({
  north,
  east,
  south,
  west,
  center,
  redealButton,
  infoTopLeft,
  infoTopRight,
  infoBottomLeft,
  infoBottomRight,
}: BridgeDealGridProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Corner Info Areas */}
      <div className="absolute top-0 left-0 z-10">{infoTopLeft}</div>
      <div className="absolute top-0 right-0 z-10">{infoTopRight}</div>
      <div className="absolute bottom-0 left-0 z-10">{infoBottomLeft}</div>
      <div className="absolute bottom-0 right-0 z-10">{infoBottomRight}</div>
      {/* Redeal Button (top-left, above info if needed) */}
      <div className="absolute top-2 left-2 z-20">{redealButton}</div>

      {/* Bridge Table Grid */}
      <div
        className="
          grid 
          grid-cols-3 
          grid-rows-3 
          gap-2 
          w-full
          aspect-square
          min-h-[320px]
          "
      >
        {/* North */}
        <div className="col-start-2 row-start-1 flex justify-center items-center">
          {north}
        </div>
        {/* West */}
        <div className="col-start-1 row-start-2 flex justify-center items-center">
          {west}
        </div>
        {/* Center (Vulnerability & Dealer) */}
        <div className="col-start-2 row-start-2 flex justify-center items-center">
          {center}
        </div>
        {/* East */}
        <div className="col-start-3 row-start-2 flex justify-center items-center">
          {east}
        </div>
        {/* South */}
        <div className="col-start-2 row-start-3 flex justify-center items-center">
          {south}
        </div>
      </div>
    </div>
  );
}
