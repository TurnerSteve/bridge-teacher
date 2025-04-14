import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import ShadCN button component
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"; // Import icons

interface DealSelectorProps {
    maxDeal : number , 
    onUpdateDealId : (newDeal: number) => void
}

const DealSelectorComponent = ({maxDeal, onUpdateDealId} : DealSelectorProps) => {

      // State to manage the dealId
  const [dealId, setDealId] = useState<number>(0);

    const handleUpdate = (dealId : number) => {
        setDealId(dealId)
        onUpdateDealId(dealId); // Call the function passed from the parent
      };

  // Define min and max integer values
  const MIN_INT = 0 ;
  const MAX_INT = maxDeal;

  // Handlers for buttons
  const increment = () => handleUpdate(dealId + 1);
  const decrement = () => handleUpdate(dealId - 1 );
  const goToMaxInt = () => handleUpdate(MAX_INT);
  const goToMinInt = () => handleUpdate(MIN_INT);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Display Deal Number selected */}
      <div className="text-2xl font-bold">{dealId}</div>

      {/* Buttons for Counter Control */}
      <div className="flex space-x-2">
        {/* Go to Minimum */}
        <Button onClick={goToMinInt} variant="outline" disabled={dealId == MIN_INT}>
          <ChevronsLeft className="w-5 h-5" />
        </Button>

        {/* Decrement */}
        <Button onClick={decrement} variant="outline" disabled={dealId == MIN_INT}>
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Increment */}
        <Button onClick={increment} variant="outline" disabled={dealId == MAX_INT}>
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Go to Maximum */}
        <Button onClick={goToMaxInt} variant="outline" disabled={dealId == MAX_INT}>
          <ChevronsRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default DealSelectorComponent;