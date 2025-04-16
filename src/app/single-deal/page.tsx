"use client";

import HandComponent from "../../components/dealDisplay/Hand";
import SingleDealController from "./SingleDealGenerator";
import { useGlobalData } from "@/context/DataContextProvider";
import { useGlobalSettings } from "@/context/SettingsContextProvider";
import { CentreBoard } from "@/components/dealDisplay/CentreBoard";

// Partial deal generator will generate
// slots [n1,n2,n3,n4] Cards n1=North, n2=East, n3=South, n4 West



function DealComponent() {
  const { storedDeal } = useGlobalData();
  const { dealCount } = useGlobalData();
  const { dealingAlgo } = useGlobalSettings();

  const { dealingSlots } = useGlobalSettings();

  // We probably dont need to do a deal here. Just initialise an empty deal
  // useEffect(() => {

  //   console.log(`The first deal is a partial "${Algo.PARTIAL}" of size [11,6,15,5]`);
  //   const deal: DealResult = executeAlgo(Algo.PARTIAL, [11, 6, 9, 5]);
  //   appendDeal(deal.algo, deal.description, deal.deal);

  // }, []);

  if (!storedDeal) {
    return <div> Loading... </div>; // Render fallback UI ... Needs a Skeleton
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-screen-xl">
          <div className="flex items-center row-start-1 col-start-1">
            [{dealingAlgo}] dealing Algo
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-2">
            <HandComponent direction="North" hand={storedDeal.deal.North} />
          </div>
          <div className="flex justify-center items-center row-start-1 col-start-3">
            <SingleDealController slots={dealingSlots} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-1">
            <HandComponent direction="West" hand={storedDeal.deal.West} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-2">
            <CentreBoard boardId={dealCount} size={200} />
          </div>
          <div className="flex justify-center items-center row-start-2 col-start-3">
            <HandComponent direction="East" hand={storedDeal.deal.East} />
          </div>
          <div className="flex justify-center items-center row-start-3 col-start-2">
            <HandComponent direction="South" hand={storedDeal.deal.South} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DealComponent;
