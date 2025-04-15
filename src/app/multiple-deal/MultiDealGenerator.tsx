import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DealResult, StoredDeal } from "../single-deal/page";
import { useGlobalData } from "@/context/DataContextProvider";
import { useState } from "react";

import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { useGlobalSettings } from "@/context/SettingsContextProvider";

interface Props {
  slots: number[];
}

function MultiDealGenerator({ slots }: Props) {

  const { storedDeals, addStoredDeal } = useGlobalData();
  const { dealingAlgo, boardsPerDealset} = useGlobalSettings() ;
  const [dealTime, setDealTime] = useState<string>("None");

  const addDeal = () => {
    const deal: DealResult = executeAlgo(dealingAlgo, slots);
    const dealId = storedDeals.length + 1;
    const newDeal: StoredDeal = {
      dealId: dealId,
      algo: deal.algo,
      description: deal.description,
      deal: deal.deal,
    };
    console.log(`Adding deal \[${dealId}\]} which uses algo "${deal.algo}"`);

    addStoredDeal(newDeal);
  };

  const addDeals = () => {
    const startTime: number = performance.now();
    for (let index = 0; index < boardsPerDealset ; index++) {
      addDeal();
    }
    const dealingTime: number = performance.now() - startTime;
    setDealTime(dealingTime.toFixed(3));
  };

  const timeString = `Dealing Time = ${dealTime} ms`;

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>
          Deal {boardsPerDealset} boards. Currently [{storedDeals.length - 1}] deals
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
