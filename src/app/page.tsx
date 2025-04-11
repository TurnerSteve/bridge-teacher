"use client"
import { Algo } from "@/bridge/types/enums";
import DealComponent from "@/components/Deal";

export default function Home() {
  const algo = Algo.NSEW;
  return (
    <div className="flex justify-center items-center">
      <DealComponent algo={algo} slots={[9,9,9,9]} />
    </div>
  );
}
