import partialDeal from "@/bridge/deal-generators/partialDealGenerator";
import fisherYatesDeal from "@/bridge/deal-generators/fisherYatesDealGenerator";
import nsewDeal from "@/bridge/deal-generators/frawdoDealGenerator";
import { DealResult } from "@/components/SingleDeal";
import { Algo } from "../types/enums";

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