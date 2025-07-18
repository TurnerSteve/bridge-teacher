"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useGlobalData } from "@/context/DealStoreContext";

import { Board } from "@/types/structs";
import { useAlgorithm } from "@/context/AlgorithmContext";
import { useSettings } from "@/context/SettingsContext";
import { useEffect } from "react";
import { createBoard } from "@/lib/bridge/utils/createBoard";


export default function SingleDealController() {
  const { algorithm } = useAlgorithm();
  const { partialDealSlots } = useSettings();
  const { storedDeals, updateDeal } = useGlobalData();

  useEffect(() => {
    // forces a single deal once at the start.
    const boardNo = 0;
    console.log(
      `Board ${boardNo} uses algo "${algorithm}" and slots[${partialDealSlots}]`
    );

    if (storedDeals.length === 0) {
    const board = createBoard(boardNo, algorithm, partialDealSlots);
    updateDeal(0, board);
  }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // THIS IS OK : No dependancies. Forces one deal on initialisation.

  function performDeal() {
    const newBoardNo = (storedDeals[0].boardNo % 16) + 1;
    const board: Board = createBoard(newBoardNo, algorithm, partialDealSlots);
    const len = storedDeals.length;  
  
    console.log(
      `New Board[${len}:${newBoardNo}] using algo "${algorithm}"`
    );

    updateDeal(0, board);
  }

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardContent>
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

