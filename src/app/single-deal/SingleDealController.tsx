import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { useGlobalData } from "@/context/DealStoreContext";
import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { Board, DealResult } from "@/types/structs";
import { useAlgorithm } from "@/context/AlgorithmContext";
import { Algorithm } from "@/types/dealingAlgo-enum";
import { useSettings } from "@/context/SettingsContext";
import { useEffect } from "react";

function SingleDealController() {
  const { algorithm } = useAlgorithm();
  const { partialDealSlots } = useSettings();
  const { storedDeal, setStoredDeal } = useGlobalData();


  useEffect(() => {
    // forces a single deal once at the start.
    const boardNo = 1;
    console.log(
      `Board ${boardNo} uses algo "${algorithm}" and slots[${partialDealSlots}]`
    );

    const board = createBoard(boardNo, algorithm, partialDealSlots);

    setStoredDeal(board);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // THIS IS OK : No dependancies. Forces one deal on initialisation.

  function performDeal() {
    const newBoardNo = (storedDeal.boardNo % 16) + 1;

    console.log(
      `New Board[${newBoardNo}] using algo "${algorithm}"`
    );

    const board: Board = createBoard(newBoardNo, algorithm, partialDealSlots);
    setStoredDeal(board);
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
            onClick={performDeal}
          >
            Redeal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleDealController;

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
