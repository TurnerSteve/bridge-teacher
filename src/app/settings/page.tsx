import UpdateBoardsPerDealset from "./UpdateBoardsPerDealset";
import UpdateSelectedDealingAlgo from "./UpdateDealingAlgo";
import UpdateDealingSlots from "./UpdateDealingSlots";
import { Card, CardContent, CardHeader} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader className="text-2xl font-bold">Settings Page</CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4">
          <Card className="flex-1 px-5">
          <CardHeader className="text-0xl font-bold">Dealing Slots</CardHeader>
              <UpdateDealingSlots />
          </Card>
          <Card className="flex-1 px-5">
            <CardHeader className="text-0xl font-bold px-4">Boards per deal set</CardHeader>
            <UpdateBoardsPerDealset />
          </Card>
          <Card className="flex-1 px-5">
            <CardHeader className="text-0xl font-bold">Dealing Algoritm</CardHeader>
            <UpdateSelectedDealingAlgo />
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
