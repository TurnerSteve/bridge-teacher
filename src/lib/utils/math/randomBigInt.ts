
export default function randomBigInt(max: bigint): bigint {
  if (max < 0)
    throw new Error("generateRandomBigInt cannot generate negative BigInt");
  if (max === 0n) return 0n;

  const POWER = 64n;
  const FILTER = (1n << POWER) - 1n;

  // 1. Create an BigInt64Array representation of max number
  let num = max;
  const maxList: bigint[] = [];
  while (num) {
    maxList.unshift(num & FILTER);
    num >>= POWER;
  }
  const maxArray = BigInt64Array.from(maxList);

  // 2. Generate the random number
  const rndArray = crypto.getRandomValues(maxArray.slice());

  // 3. Trim the random number highest bits
  // to reduce failure rate to <50%
  let trim = 1n;
  while (maxArray[0] > trim) trim <<= 1n;
  trim--;
  rndArray[0] &= trim;

  // 4. Convert to bigint
  let rnd = 0n;
  for (let i = 0; i < rndArray.length; i++) {
    rnd <<= POWER;
    rnd += rndArray[i];
  }

  // 5. Check for failure (the random number being higher than max)
  // and retry if needed
  if (rnd >= max) return randomBigInt(max);
  if (rnd < 0) return randomBigInt(max);

  // if (rnd < 0) {
  //   console.log ("Random number generator has created a negative number, so try again")
    
  //   console.log ("max =", max.toString(2))
  //   console.log ("rnd =", rnd.toString(2))
  //   return randomBigInt(max);
  // }

  return rnd;
}
