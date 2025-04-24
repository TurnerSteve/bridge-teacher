// components/layouts/PositionedLayout.tsx
import { ReactNode } from "react";

/**
 * Layout with flexible slots for topLeft, topRight, bottomLeft, bottomRight, and center,
 * plus a main card area for children.
 */
export type PositionedLayoutProps = {
  /** Renders in the top left corner */
  topLeft?: ReactNode;
  /** Renders in the top right corner */
  topRight?: ReactNode;
  /** Renders in the bottom left corner */
  bottomLeft?: ReactNode;
  /** Renders in the bottom right corner */
  bottomRight?: ReactNode;
  /** Renders in the center of the screen */
  center?: ReactNode;
  /** Main card content */
  children?: ReactNode;
};

export function PositionedLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  center,
  children,
}: PositionedLayoutProps) {
  return (
    <div className="relative h-screen w-screen">
      {/* Absolute positioned elements for corners */}
      {topLeft && (
        <div className="absolute left-4 top-4 z-10">
          {topLeft}
        </div>
      )}

      {topRight && (
        <div className="absolute right-4 top-4 z-10">
          {topRight}
        </div>
      )}

      {bottomLeft && (
        <div className="absolute left-4 bottom-4 z-10">
          {bottomLeft}
        </div>
      )}

      {bottomRight && (
        <div className="absolute right-4 bottom-4 z-10">
          {bottomRight}
        </div>
      )}

      {/* Center area */}
      {center && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {center}
        </div>
      )}

      {/* Card container with space for children */}
      <div className="h-full w-full flex items-center justify-center p-4">
        <div className="relative bg-card text-card-foreground rounded-lg shadow-lg p-6 w-full max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
