import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { useGlobalData } from "@/context/DealStoreContext";
import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { Board, DealResult } from "@/types/structs";
import { useAlgorithm } from "@/context/AlgorithmContext";
import { Algorithm } from "@/types/dealingAlgo-enum";
import { useSettings } from "@/context/SettingsContext";
import { useEffect } from "react";

export default function MultiDealController() {
  const { algorithm } = useAlgorithm();
  const { partialDealSlots, multiDealCount } = useSettings();
  const { storedDeals, setStoredDeals, appendDeal } = useGlobalData();
  const {  setDealPointer} = useGlobalData() ;

  useEffect(() => {

    const boardNo = 1;
    console.log(
      `Board ${boardNo} uses algo "${algorithm}" and slots[${partialDealSlots}]`
    );

    const board = createBoard(boardNo, algorithm, partialDealSlots);

    setStoredDeals([board]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // THIS IS OK : No dependancies. Forces one deal on initialisation.

  function performDeals() {
    const firstBoard = storedDeals.length ;
    const lastBoard = firstBoard + multiDealCount - 1 ;

    for (let i = firstBoard ; i < lastBoard ; i++) {
      const board: Board = createBoard(i, algorithm, partialDealSlots);
      appendDeal(board);  // Push to global store
      console.log(`New Board[${i}] using algo "${algorithm}"`)
    }
    setDealPointer(firstBoard) ;  
  }

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>Single Deal dealing Algo[{algorithm}] </CardHeader>
        <CardContent>
          <div className="flex items-center row-start-1 col-start-1">

          </div>
          <Button
            className="mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={performDeals}
          >
            Redeal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function createBoard(boardNo: number, algo: Algorithm, slots: number[]): Board {
  const deal: DealResult = executeAlgo(algo, slots);
  const board: Board = {
    boardNo: boardNo,
    algo: deal.algo,
    description: deal.description,
    deal: deal.deal,
  };

  return board;
}
