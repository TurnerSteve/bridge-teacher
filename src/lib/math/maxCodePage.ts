import factorial from "./factorial";


export default function maxCodePage(slotAlloc: number[]): bigint {
  // Check for a valid slotAlloc
  if (slotAlloc == null) throw new Error(`slotAlloc is null or undefined`);
  if (!Array.isArray(slotAlloc) || slotAlloc.length !== 4) {
    throw new Error("Array must have exactly 4 elements.");
  }
  slotAlloc.forEach((num) => {
    if (typeof num !== "number" || num < 0 || num > 13) {
      throw new RangeError();
    }
  });
  const slotTotal = slotAlloc.reduce((acc, val) => acc + val, 0);

  return (
    factorial(slotTotal) /
    (factorial(slotAlloc[0]) *
      factorial(slotAlloc[1]) *
      factorial(slotAlloc[2]) *
      factorial(slotAlloc[3]))
  );
}
