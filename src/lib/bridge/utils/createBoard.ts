import { executeAlgo } from "@/lib/bridge/deal-generators";
import { Algorithm } from "@/types/dealingAlgo-enum";
import { Board, DealResult } from "@/types/structs";

export function createBoard(boardNo: number, algo: Algorithm, slots: number[]): Board {
    const deal: DealResult = executeAlgo(algo, slots);
    const board: Board = {
      boardNo: boardNo,
      algo: deal.algo,
      description: deal.description,
      deal: deal.deal,
    };
  
    return board;
  }