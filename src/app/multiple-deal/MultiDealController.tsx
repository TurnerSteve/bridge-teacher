import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { useGlobalData } from "@/context/DealStoreContext";
import { Board} from "@/types/structs";
import { useAlgorithm } from "@/context/AlgorithmContext";

import { useSettings } from "@/context/SettingsContext";
import { useEffect } from "react";
import { createBoard } from "@/lib/bridge/utils/createBoard";
import { DeckViewDropdown } from "@/components/DeckViewDropdown";

export default function MultiDealController() {

  const { algorithm } = useAlgorithm();
  const { partialDealSlots, multiDealCount } = useSettings();
  const { storedDeals, appendDeal } = useGlobalData();

  useEffect(() => {
    const storeSize = storedDeals.length; 

    if (storeSize === 1) { // Only a single deal in the array;
      console.log(`Need to deal more boards`)
    }
    if (storeSize > 1) { // Only a single deal in the array;
      console.log(`Display board 1`)
    }
    
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // THIS IS OK : No dependancies. Forces one deal on initialisation.

  function performDeals() {
    const firstBoard = storedDeals.length ;  /// zero indexing
    const lastBoard = firstBoard + multiDealCount - 1  ;

    console.log(`Multi dealing ${multiDealCount} boards. [${firstBoard}...${lastBoard}]`)
    for (let i = firstBoard ; i <= lastBoard ; i++) {
      const board: Board = createBoard(i, algorithm, partialDealSlots);
      appendDeal(board);  // Push to global store
      console.log(`New Board[${i}] using algo "${algorithm}"`)
    } 
  }

  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>{algorithm} Multi deal [{storedDeals.length - 1}] </CardHeader>
        <CardContent>

          <Button
            className="mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={performDeals}
          >
            Redeal {multiDealCount}
          </Button>
          <div className="flex items-center row-start-1 col-start-1">
            <DeckViewDropdown />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

