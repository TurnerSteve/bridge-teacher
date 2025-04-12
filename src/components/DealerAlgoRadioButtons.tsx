import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Algo } from "@/bridge/types/enums";
import { Card, CardContent, CardHeader } from "./ui/card";

// Props for the child component
interface DealerAlgoRadioButtonsProps {
  onOptionChange: (value: Algo) => void; // Callback function from parent
}

export function DealerAlgoRadioButtons({
  onOptionChange,
}: DealerAlgoRadioButtonsProps) {
  // State to manage the selected option locally
  const [selectedOption, setSelectedOption] = useState<Algo>(Algo.PARTIAL);

  // Handle change event for radio button selections
  const handleChange = (value: string) => {
    const enumValue = value as Algo;

    setSelectedOption(enumValue); // Update local state
    onOptionChange(enumValue); // Pass the value up to the parent
  };

  return (
    <Card className="w-full min-h">
      <CardHeader className="py-0 border-1">Dealing Algo</CardHeader>
      <CardContent className="p-0 border-1">
        <RadioGroup
          value={selectedOption}
          onValueChange={handleChange} // Call handleChange when a radio button is selected
          className="space-y-2"
        >
          {/* Option 1 */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={Algo.PARTIAL} id="option-1" />
            <Label htmlFor="option-1">Pavlicek (Partial)</Label>
          </div>
          {/* Option 2 */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={Algo.FISHERYATES} id="option-2" />
            <Label htmlFor="option-2">Fisher-Yates</Label>
          </div>
          {/* Option 3 */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={Algo.HOMEGROWN} id="option-3" />
            <Label htmlFor="option-3">Home grown </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
