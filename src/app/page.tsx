"use client"
import { Algo } from "@/bridge/types/enums";
import DealComponent from "@/components/Deal";

export default function Home() {
  const algo = Algo.Partial;
  return (
    <div className="flex justify-center items-center">
      <DealComponent algo={algo} slots={[13,13,13,13]} />
    </div>
  );
}
