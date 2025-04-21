import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { useGlobalData } from "@/context/DataContextProvider";
import executeAlgo from "@/lib/bridge/deal-generators/executeAlgo";
import { useGlobalSettings } from "@/context/SettingsContextProvider";
import { DealResult } from "@/types/structs";

interface Props {
  slots: number[];
}

function SingleDealController({ slots }: Props) {
  const { dealingAlgo } = useGlobalSettings();
  const { setStoredDeal } = useGlobalData();
  const { dealCount, setDealCount } = useGlobalData();

  const setDeal = () => {
    const deal: DealResult = executeAlgo(dealingAlgo, slots);
    setStoredDeal({
      dealId: dealCount + 1,
      algo: deal.algo,
      description: deal.description,
      deal: deal.deal,
    });
    setDealCount(dealCount + 1);
    console.log(
      `Writing single deal ${dealCount + 1} which uses algo "${deal.algo}"`
    );
  }

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>Single Deal</CardHeader>
        <CardContent>
          <Button
            className="mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={setDeal}
          >
            Redeal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleDealController;
