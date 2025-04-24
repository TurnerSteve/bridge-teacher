"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useSettings } from "@/context/SettingsContext";

 function UpdateBoardsPerSet() {

  const { multiDealCount, setMultiDealCount} = useSettings();

  const selectedNumber = multiDealCount
  const numbers = [4,8,16,24,32,48, 1024,]; // The set of numbers to choose from

  const handleSelect = (number: number) => {
    setMultiDealCount(number); // Notify the Global store
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

export default UpdateBoardsPerSet