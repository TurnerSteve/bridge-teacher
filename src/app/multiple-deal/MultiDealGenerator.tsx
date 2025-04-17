import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useGlobalData } from "@/context/DataContextProvider";
import { useState } from "react";

import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { useGlobalSettings } from "@/context/SettingsContextProvider";
import { DealResult, StoredDeal } from "@/lib/types";

interface Props {
  slots: number[];
}

function MultiDealGenerator({ slots }: Props) {

  const { storedDeals, addStoredDeal } = useGlobalData();
  const { dealingAlgo, boardsPerDealset} = useGlobalSettings() ;
  const [dealTime, setDealTime] = useState<string>("None");

  const addDeal = (index: number) => {

    // If array is of length 1 and boardId=0 we delete the board which
    // was only created (empty) for initialisation purposes    
    // We write it as board 1.

    const arrayLength = storedDeals.length ;

    let boardId : number = 0;
    if (arrayLength > 0) {
      boardId = storedDeals[arrayLength-1].dealId;

      if (boardId === 0)
        storedDeals.splice(0, 1);   // delete the empty deal
    }
    boardId += ++index ;
    const nextDeal: DealResult = executeAlgo(dealingAlgo, slots);
    console.log(`MultiDealGenerator: Writing boardId: ${boardId}`);
    const newDeal: StoredDeal = {
      dealId: boardId,
      algo: nextDeal.algo,
      description: nextDeal.description,
      deal: nextDeal.deal,
    };
    addStoredDeal(newDeal);

  };

  const addDeals = () => {
    const startTime: number = performance.now();
    for (let index = 0; index < boardsPerDealset ; index++) {
      addDeal(index);
    }
    const dealingTime: number = performance.now() - startTime;
    setDealTime(dealingTime.toFixed(3));
  };

  const timeString = `Dealing Time = ${dealTime} ms`;

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>
          Deal {boardsPerDealset} boards. Currently [{storedDeals.length}] deals
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <span><ButtonElement addDeals={addDeals} />  </span>

        </CardContent>
        <CardFooter>
          <div>{timeString}</div>
        </CardFooter>
      </Card>
    </div>
  );
}

type ButtonElementProps = { addDeals: () => void };
function ButtonElement({ addDeals }: ButtonElementProps) {
  return (
    <>
      <Button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={addDeals}
      >
        Multi Redeal
      </Button>
    </>
  );
}

export default MultiDealGenerator;
