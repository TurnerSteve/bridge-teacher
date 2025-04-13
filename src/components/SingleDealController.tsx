import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DealResult } from "./SingleDeal";
import executeAlgo from "@/bridge/deal-generators/executeAlgo";
import { useGlobalState } from "@/app/page";

interface Props {
  slots: number[];
}

function SingleDealController({ slots }: Props) {
  const { dealingAlgo } = useGlobalState();
  const { setDeal } = useGlobalState();
  const { dealCount, setDealCount } = useGlobalState();
  return (
    <div>
      <Card className="w-full px-5">
        <CardHeader>Single Deal</CardHeader>
        <CardContent>
          <Button
            className="mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => {
              const deal: DealResult = executeAlgo(dealingAlgo, slots);
              setDeal({
                dealId: dealCount + 1,
                algo: deal.algo,
                description: deal.description,
                deal: deal.deal,
              });
              setDealCount(dealCount + 1);
              console.log(
                `Appending Deal ${dealCount + 1} which uses algo "${deal.algo}"`
              );
            }}
          >
            Redeal
          </Button>
          
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleDealController;
