import { Direction,  Vulnerability } from "@/types/cards";


// Define the lookup table entry type
type LookupEntry = {
  vulnerability: Vulnerability;
  dealer: Direction;
};

// Create the lookup table
const lookupTable: LookupEntry[] = [
  { vulnerability: Vulnerability.NONE, dealer: Direction.NORTH }, // Board 1
  { vulnerability: Vulnerability.NS, dealer: Direction.EAST }, // Board 2
  { vulnerability: Vulnerability.EW, dealer: Direction.SOUTH }, // Board 3
  { vulnerability: Vulnerability.ALL, dealer: Direction.WEST }, // Board 4
  { vulnerability: Vulnerability.NS, dealer: Direction.NORTH }, // Board 5
  { vulnerability: Vulnerability.EW, dealer: Direction.EAST }, // Board 6
  { vulnerability: Vulnerability.ALL, dealer: Direction.SOUTH }, // Board 7
  { vulnerability: Vulnerability.NONE, dealer: Direction.WEST }, // Board 8
  { vulnerability: Vulnerability.EW, dealer: Direction.NORTH }, // Board 9
  { vulnerability: Vulnerability.ALL, dealer: Direction.EAST }, // Board 10
  { vulnerability: Vulnerability.NONE, dealer: Direction.SOUTH }, // Board 11
  { vulnerability: Vulnerability.NS, dealer: Direction.WEST }, // Board 12
  { vulnerability: Vulnerability.ALL, dealer: Direction.NORTH }, // Board 13
  { vulnerability: Vulnerability.NONE, dealer: Direction.EAST }, // Board 14
  { vulnerability: Vulnerability.NS, dealer: Direction.SOUTH }, // Board 15
  { vulnerability: Vulnerability.EW, dealer: Direction.WEST }, // Board 16
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
