
import { DealResult } from "@/app/single-deal/page";
import { Algo } from "../../enums";
import { partialDeal, fisherYatesDeal, nsewDeal } from ".";

function executeAlgo(algo: Algo, slots: number[]): DealResult {
    console.log(`Executing algo "${algo}" to decode \[${slots}\] slots`);
  
    let deal: DealResult;
  
    switch (algo) {
      case Algo.FISHERYATES:
        deal = fisherYatesDeal(slots);
        break;
      case Algo.PARTIAL:
        deal = partialDeal(slots);
        break;
      case Algo.HOMEGROWN:
        deal = nsewDeal(slots);
        break;
      default:
        deal = nsewDeal([0, 0, 0, 0]);
        break;
    }
  
    return deal;
  }

  export default executeAlgo ;