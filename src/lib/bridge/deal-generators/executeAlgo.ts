
import { Algorithm } from "@/types/dealingAlgo-enum";
import {
  fisherYatesDealGenerator,
  homegrownDealGenerator,
  pavlicekDealGenerator,
} from ".";
import { DealResult } from "@/types/structs";


function executeAlgo(algo: Algorithm, slots: number[]): DealResult {
  // console.log(`Executing algo "${algo}" to decode \[${slots}\] slots`);

  let deal: DealResult;

  switch (algo) {
    case Algorithm.FisherYates:
      deal = fisherYatesDealGenerator(slots);
      break;
    case Algorithm.Pavlicek:
      deal = pavlicekDealGenerator(slots);
      break;
    case Algorithm.HomeGrown:
      deal = homegrownDealGenerator(slots);
      break;
    default:
      deal = homegrownDealGenerator([0, 0, 0, 0]);
      break;
  }

  return deal;
}

export default executeAlgo;
