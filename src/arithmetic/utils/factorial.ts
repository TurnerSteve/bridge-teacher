export default function factorial(n: number): bigint {
    if (n < 0n) {
      throw new Error("Factorial is not defined for negative numbers");
    }
    return n === 0 ? 1n : BigInt(n) * factorial(n - 1);
  }