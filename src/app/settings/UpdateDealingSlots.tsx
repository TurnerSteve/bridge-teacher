"use client"
import { cn } from "@/utils/shadcn";

import { useGlobalSettings } from "@/context/SettingsContextProvider";

export default function UpdateDealingSlots() {
  const { dealingSlots, setDealingSlots } = useGlobalSettings();

  const values = dealingSlots ;

  const handleSelectorChange = (index: number, newValue: number) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setDealingSlots(updatedValues);
  };

  return (
    <div className={cn("space-y-4")}>
      {values.map((value, index) => (
        <NumberSelector
          key={index}
          value={value}
          onChange={(newValue) => handleSelectorChange(index, newValue)}
        />
      ))}
      <div className={cn("mt-4 p-4 bg-gray-100 rounded")}>
        <h2 className={cn("text-lg font-bold")}>Selector Values:</h2>
        <p>{JSON.stringify(values)}</p>
      </div>
    </div>
  );
}


interface NumberSelectorProps {
  value: number;
  onChange: (newValue: number) => void;
}

function NumberSelector({ value, onChange }: NumberSelectorProps) {
  const increment = () => {
    if (value < 13) onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) onChange(value - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 13) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn("flex items-center space-x-2")}>
      <button
        className={cn(
          "p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        )}
        onClick={decrement}
      >
        &larr;
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className={cn(
          "w-16 text-center border border-gray-300 rounded focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
        )}
        min={0}
        max={13}
      />
      <button
        className={cn(
          "p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        )}
        onClick={increment}
      >
        &rarr;
      </button>
    </div>
  );
}




