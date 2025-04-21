import { Direction } from "@/types/cards";


export default function elementCount(arr: Direction[]): {
  [key in Direction ]: number;
} {
  const elementCount: {[key in Direction]: number;
  } = {
    [Direction.NORTH]: 0,
    [Direction.SOUTH]: 0,
    [Direction.EAST]: 0,
    [Direction.WEST]: 0,
  };

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    elementCount[element]++;
  }
  return elementCount;
}
