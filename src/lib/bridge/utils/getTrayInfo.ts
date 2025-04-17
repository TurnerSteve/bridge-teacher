import { Direction,  Vulnerability } from "@/lib/enums";


// Define the lookup table entry type
type LookupEntry = {
  vulnerability: Vulnerability;
  dealer: Direction;
};

// Create the lookup table
const lookupTable: LookupEntry[] = [
  { vulnerability: Vulnerability.None, dealer: Direction.North }, // Board 1
  { vulnerability: Vulnerability.NS, dealer: Direction.East }, // Board 2
  { vulnerability: Vulnerability.EW, dealer: Direction.South }, // Board 3
  { vulnerability: Vulnerability.Both, dealer: Direction.West }, // Board 4
  { vulnerability: Vulnerability.NS, dealer: Direction.North }, // Board 5
  { vulnerability: Vulnerability.EW, dealer: Direction.East }, // Board 6
  { vulnerability: Vulnerability.Both, dealer: Direction.South }, // Board 7
  { vulnerability: Vulnerability.None, dealer: Direction.West }, // Board 8
  { vulnerability: Vulnerability.EW, dealer: Direction.North }, // Board 9
  { vulnerability: Vulnerability.Both, dealer: Direction.East }, // Board 10
  { vulnerability: Vulnerability.None, dealer: Direction.South }, // Board 11
  { vulnerability: Vulnerability.NS, dealer: Direction.West }, // Board 12
  { vulnerability: Vulnerability.Both, dealer: Direction.North }, // Board 13
  { vulnerability: Vulnerability.None, dealer: Direction.East }, // Board 14
  { vulnerability: Vulnerability.NS, dealer: Direction.South }, // Board 15
  { vulnerability: Vulnerability.EW, dealer: Direction.West }, // Board 16
];

// Function to get the information for a given board index
function getTrayInfo(boardNumber: number): LookupEntry {
  // Ensure the index is valid (0 to 16)
  if (boardNumber < 0)
    throw new RangeError(
      `Cannot have board number [${boardNumber}]. Must be between 1 and 16.`
    );
  if (boardNumber === 0) { // pretend it is board 1
    return lookupTable[0];
  }

  return lookupTable[((boardNumber - 1) % 16) ];
}

export default getTrayInfo;
export type { LookupEntry };
