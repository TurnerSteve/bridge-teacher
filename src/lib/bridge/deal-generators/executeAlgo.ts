import { Algo } from "../../enums";
import {
  fisherYatesDealGenerator,
  homegrownDealGenerator,
  pavlicekDealGenerator,
} from ".";
import { DealResult } from "@/lib/types";

function executeAlgo(algo: Algo, slots: number[]): DealResult {
  // console.log(`Executing algo "${algo}" to decode \[${slots}\] slots`);

  let deal: DealResult;

  switch (algo) {
    case Algo.FISHERYATES:
      deal = fisherYatesDealGenerator(slots);
      break;
    case Algo.PARTIAL:
      deal = pavlicekDealGenerator(slots);
      break;
    case Algo.HOMEGROWN:
      deal = homegrownDealGenerator(slots);
      break;
    default:
      deal = homegrownDealGenerator([0, 0, 0, 0]);
      break;
  }

  return deal;
}

export default executeAlgo;
