import { Direction } from "@/lib/enums";


export default function elementCount(arr: Direction[]): {
  [key in Direction ]: number;
} {
  const elementCount: {[key in Direction]: number;
  } = {
    [Direction.North]: 0,
    [Direction.South]: 0,
    [Direction.East]: 0,
    [Direction.West]: 0,
  };

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    elementCount[element]++;
  }
  return elementCount;
}
