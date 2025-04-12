"use client"
import DealComponent from "@/components/Deal";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <DealComponent  slots={[13,13,13,13]} />
      {/* Just to sest partial dealing of the first board */}
    </div>
  );
}
