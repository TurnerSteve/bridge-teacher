"use client"
import DealComponent from "@/components/Deal";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <DealComponent  slots={[13,13,13,13]} />
    </div>
  );
}
