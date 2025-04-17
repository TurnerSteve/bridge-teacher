import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGlobalData } from "@/context/DataContextProvider";
import { exportDeals } from "@/lib/bridge/utils/exportDeals";
import { FaFileExport } from "react-icons/fa6";

export default function ExportDeals() {
  const { storedDeals } = useGlobalData();

  const handleExport = (
    format: "JSON" | "CSV" | "TEXT" | "XML" | "PBN" | "LIN" |  "DUP" | "BRI" | "DGE" 
  ) => {
    let output = "";
    switch (format) {
      case "JSON":
        output = exportDeals.toJSON(storedDeals);
        break;
      case "CSV":
        output = exportDeals.toCSV(storedDeals);
        break;
      case "TEXT":
        output = exportDeals.toTEXT(storedDeals);
        break;
      case "XML":
        output = exportDeals.toXML(storedDeals);
        break;
      case "PBN":
        output = exportDeals.toPBN(storedDeals);
        break;
      case "LIN":
        output = exportDeals.toLIN(storedDeals);
        break;
      case "DGE":
        output = exportDeals.toDGE(storedDeals);
        break;
      case "DUP":
        output = exportDeals.toDUP(storedDeals);
        break;
      case "BRI":
        output = exportDeals.toBRI(storedDeals);
        break;
      default:
        break;
    }
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deals.${format.toLowerCase()}`;
    a.click();
  };

  return (
    <Card className="px-5">
      <CardHeader className="text-lg font-bold mb-4">
        Export Deals in chosen format.
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <SaveButton onClick={() => handleExport("PBN")}>PBN</SaveButton>
        <SaveButton onClick={() => handleExport("LIN")}>LIN</SaveButton>
        <SaveButton onClick={() => handleExport("CSV")}>CSV</SaveButton>
        <SaveButton onClick={() => handleExport("XML")}>XML</SaveButton>
        <SaveButton onClick={() => handleExport("TEXT")}>TEXT</SaveButton>
        <SaveButton onClick={() => handleExport("JSON")}>JSON</SaveButton>
        <SaveButton onClick={() => handleExport("DGE")}>DGE</SaveButton>
        <SaveButton onClick={() => handleExport("BRI")}>BRI</SaveButton>
        <SaveButton onClick={() => handleExport("DUP")}>DUP</SaveButton>
      </CardContent>
    </Card>
  );
}

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger"; // Define button variants
  disabled?: boolean;
};

function SaveButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 text-white  hover:text-gray-800 hover:bg-blue-500";
      case "secondary":
        return "bg-gray-600 text-white  hover:text-gray-800 hover:bg-gray-500";
      case "danger":
        return "bg-red-600 text-white  hover:text-gray-800 hover:bg-red-500";
      default:
        return "bg-blue-600 text-white  hover:text-gray-800 hover:bg-red-500";
    }
  };

  return (
    <Button
      className={`w-30 px-4 py-2 rounded ${getButtonStyle()} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children} <FaFileExport />
    </Button>
  );
}
