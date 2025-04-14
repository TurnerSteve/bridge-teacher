import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type NumberDropdownProps = {
    onNumberSelect: (number: number) => void; // Callback function to pass the selected number to the parent
  };

export function NumberDropdown({ onNumberSelect }: NumberDropdownProps) {
  const [selectedNumber, setLocalSelectedNumber] = useState<number | null>(null);

  const numbers = [32,64,128,1024,10000,]; // The set of numbers to choose from

  const handleSelect = (number: number) => {
    setLocalSelectedNumber(number); // Update local state
    onNumberSelect(number); // Notify the parent
  };

  return (
    <div className="btn btn-primary p-2">
      <DropdownMenu >
        <DropdownMenuTrigger className="btn btn-primary flex items-center justify-between">
          {selectedNumber !== null ? `${selectedNumber}` : "Select"}
          <span className="ml-2">▼</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2">
          {numbers.map((number) => (
            <DropdownMenuItem className="hover:bg-gray-200 p-2 rounded-md"
              key={number}
              onClick={() => handleSelect(number)}
            >
              {number}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}