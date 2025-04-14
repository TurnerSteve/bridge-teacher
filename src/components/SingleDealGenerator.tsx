import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DealResult } from "./SingleDeal";
import executeAlgo from "@/bridge/deal-generators/executeAlgo";
import { useGlobalState } from "@/app/DealContext";


interface Props {
  slots: number[];
}

function SingleDealController({ slots }: Props) {
  const { dealingAlgo } = useGlobalState();
  const { setStoredDeal } = useGlobalState();
  const { dealCount, setDealCount } = useGlobalState();

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
