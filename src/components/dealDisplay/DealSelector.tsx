
import { Button } from "@/components/ui/button"; // Import ShadCN button component
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"; // Import icons

interface DealSelectorProps {
    dealPointer : number ,
    maxDeal : number , 
    updateDealPointer : (newDeal: number) => void
}

export default function DealSelectorComponent ({dealPointer, maxDeal, updateDealPointer} : DealSelectorProps)  {

    const handleUpdate = (dealPointer : number) => {
        updateDealPointer(dealPointer); // Call the function passed from the parent
      };

  // Define min and max integer values
  const MIN_INT = 1 ;
  const MAX_INT = maxDeal;

  // Handlers for buttons
  const increment = () => handleUpdate(dealPointer + 1);
  const decrement = () => handleUpdate(dealPointer - 1 );
  const goToMaxInt = () => handleUpdate(MAX_INT);
  const goToMinInt = () => handleUpdate(MIN_INT);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Display Deal Number selected */}
      <div className="text-2xl font-bold">Deal Selector</div>

      {/* Buttons for Counter Control */}
      <div className="flex space-x-2">
        {/* Go to Minimum */}
        <Button onClick={goToMinInt} variant="outline" disabled={dealPointer <= MIN_INT}>
          <ChevronsLeft className="w-5 h-5" />
        </Button>

        {/* Decrement */}
        <Button onClick={decrement} variant="outline" disabled={dealPointer <= MIN_INT}>
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Badge  variant="outline">
          {dealPointer}
        </Badge>

        {/* Increment */}
        <Button onClick={increment} variant="outline" disabled={dealPointer == MAX_INT}>
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Go to Maximum */}
        <Button onClick={goToMaxInt} variant="outline" disabled={dealPointer == MAX_INT}>
          <ChevronsRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
