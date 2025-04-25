// components/algorithm-dropdown.tsx
'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { useAlgorithm } from "@/context/AlgorithmContext"
import { Algorithm } from "@/types/dealingAlgo-enum"

export function AlgorithmDropdown() {
  const { algorithm, setAlgorithm } = useAlgorithm()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 rounded bg-blue-500 text-white">
        DispalyMode: {algorithm}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Algorithm</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={algorithm} onValueChange={val => setAlgorithm(val as Algorithm)}>
          {Object.values(Algorithm).map((algo) => (
            <DropdownMenuRadioItem key={algo} value={algo}>
              {algo}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
