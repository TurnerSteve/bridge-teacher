import { Direction, Rank, Suit } from "../../../types/cards";
import { DealStruct, DealResult, createEmptyDealStruct} from "@/types/structs";
import maxCodePage from "@/lib/math/maxCodePage";
import randomBigInt from "@/lib/math/randomBigInt";
import { Algorithm } from "@/types/dealingAlgo-enum";


export default function partialDealGenerator(slots: number[]): DealResult {
  // Initialize an array to represent a deck of up to cards (52 cards).
  // The slots are n1=n2=n3=n4  cards per player ... Sum <= 52
  // Otherwise default to 13 each for a full pack

  const slotTotal = slots[0] + slots[1] + slots[2] + slots[3];

  let description = `Pavlicek Algo dealer. `;
  if (slotTotal < 0 || slotTotal > 52) description += `Cannot deal [${slots}].`;
  if (slotTotal < 52) description += `Partial deal [${slots}].`;

  // console.log(description);

  const lastPage = maxCodePage(slots); // Maximum integer needed to represent a deal
  const codePage = randomBigInt(lastPage); // Generate the unique "codepage"

  if (codePage > lastPage || codePage < 0) {
    throw new RangeError(
      `Code Page \[${codePage}\] must be between 0 and \[${lastPage}\]`
    );
  }

  // use slot Allocation to generate seats
  // For partial pack [w,x,y,z] = w+x+y+z = 0..52
  // For a full pack the slots are [13,13,13,13]

  const seats: Direction[] = rpDecoder(slots, codePage);

  const deal: DealStruct = seatDecoder(seats);

  return { algo: Algorithm.Pavlicek, description: description, deal: deal };
}

// Construct the 4 hands from the array of directions.
function seatDecoder(directions: Direction[]): DealStruct {
  const hands: DealStruct = createEmptyDealStruct();

  const packSize: number = directions.length;

  // Place each card one at a time into an array for each suit in each hand
  for (let i = 0; i < packSize; i++) {
    const direction: Direction = directions[i];
    const suit: Suit = Object.values(Suit)[Math.floor(i / 13)];
    const rank: Rank = Object.values(Rank)[i % 13];

    hands[direction][suit].push(rank);
  }

  return hands;
}

function rpDecoder(slots: number[], codePage: bigint): Direction[] {
  const slotTotal = slots.reduce((acc, val) => acc + val, 0);
  const slotsRemaining = [...slots]; // Take a copy since we dont want slots to change

  let K = maxCodePage(slots);
  let pageIndex = codePage; // Indexes a fixed point in the remaining space --> ZERO

  const directionAssignments: Direction[] = Array(slotTotal).fill(null);

  // Iterate round the loop producing E,W,N,S each time until the aray is full

  for (let index = 0; index < slotTotal; index++) {
    const seatIndex = slotTotal - index;

    const X1 = (K * BigInt(slotsRemaining[0])) / BigInt(seatIndex); // We must do this rather than K/seatIndex
    if (pageIndex < X1) {
      // Found in Quadrant 1
      slotsRemaining[0]--;
      K = X1;
      directionAssignments[index] = Direction.NORTH;
      continue;
    }

    const X2 = (K * BigInt(slotsRemaining[1])) / BigInt(seatIndex); // Otherwise we lose precision.
    pageIndex -= X1;
    if (pageIndex < X2) {
      // Found in Quadrant 2
      slotsRemaining[1]--;
      K = X2;
      directionAssignments[index] = Direction.EAST;
      continue;
    }

    const X3 = (K * BigInt(slotsRemaining[2])) / BigInt(seatIndex);
    pageIndex -= X2;
    if (pageIndex < X3) {
      // Found in Quadrant 3
      slotsRemaining[2]--;
      K = X3;
      directionAssignments[index] = Direction.SOUTH;
      continue;
    }
    // Default to Quadrant 4
    const X4 = (K * BigInt(slotsRemaining[3])) / BigInt(seatIndex);
    pageIndex -= X3;
    slotsRemaining[3]--;
    K = X4;
    directionAssignments[index] = Direction.WEST;
  }

  return directionAssignments;
}
