"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useGlobalData } from "@/context/DealStoreContext";
import { useState, useEffect } from "react";

import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { useSettings } from "@/context/SettingsContext";
import { Board, DealResult} from "@/types/structs";
import { useAlgorithm } from "@/context/AlgorithmContext";

export default function MultiDealGenerator() {
  const { storedDeals } = useGlobalData();
  const { multiDealCount } = useSettings();

  

  const [dealTime] = useState<string>("None");

  const timeString = `Dealing Time = ${dealTime} ms`;

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>
          Deal {multiDealCount} boards. Currently [{storedDeals.length}] deals
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <span>
            <ButtonElement boards={multiDealCount} />{" "}
          </span>
        </CardContent>
        <CardFooter>
          <div>{timeString}</div>
        </CardFooter>
      </Card>
    </div>
  );
}

type ButtonElementProps = { boards: number };
function ButtonElement({ boards }: ButtonElementProps) {
  return (
    <>
      <Button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => AddDeals(boards)}
      >
        Multi Redeal
      </Button>
    </>
  );
}

function AddDeals(dealCount: number) {
  for (let index = 0; index < dealCount; index++) {
    AddDeal();
  }
}

function AddDeal() {
  const { storedDeals, addStoredDeal } = useGlobalData();
  const { algorithm } = useAlgorithm();
  const { partialDealSlots } = useSettings();

  // Unless forced a the number of a board is its position in the stored Deals array
  // Failure to do thsi may result in duplicte board numbers. Its not an error as such.
  const newBoardId = storedDeals.length;

  useEffect(() => {
    const algoDeal: DealResult = executeAlgo(algorithm, partialDealSlots);

    const board: Board = {
      boardNo: newBoardId,
      algo: algoDeal.algo,
      description: algoDeal.description,
      deal: algoDeal.deal,
    };
    addStoredDeal(board);
  }, [algorithm, partialDealSlots, newBoardId, addStoredDeal]);

  console.log(newBoardId === 0, `WARNING : Storing first board [0]`);

  if (newBoardId > 0) {
    const storedId: number = storedDeals[newBoardId - 1].boardNo
    const badBoard: boolean = newBoardId === storedId;

    console.log(
      badBoard,
      `WARNING : Stored board[${storedId}] stored at position [${newBoardId}]`
    );
  }

  return null;
}
