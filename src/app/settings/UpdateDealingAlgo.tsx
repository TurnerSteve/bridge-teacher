"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Algo } from "@/lib/enums";
import { useGlobalSettings } from "@/context/SettingsContextProvider";


export function UpdateSelectedDealingAlgo() {
  // State to manage the selected option locally
  // My not need to store locally. Stored also in global.

  const { dealingAlgo, setDealingAlgo} = useGlobalSettings();

  // Handle change event for radio button selections
  const handleChange = (value: string) => {
    const enumValue = value as Algo;

    setDealingAlgo(enumValue); // Update global state

  };

  return (
    <div>
        <RadioGroup
          value={dealingAlgo}
          onValueChange={handleChange} // Call handleChange when a radio button is selected
          className=" pl-5"
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
      </div>
  );
}
export default UpdateSelectedDealingAlgo;