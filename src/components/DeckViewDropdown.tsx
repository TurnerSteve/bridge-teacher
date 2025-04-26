// components/DeckView-dropdown.tsx
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
import { useDeckView } from "@/context/DeckViewContext"
import { DeckView } from "@/types/cards"

export function DeckViewDropdown() {
  const { deckView, setDeckView } = useDeckView()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mb-4 p-2 rounded bg-blue-500 text-white">
        Display deck as {deckView}s
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Deck View</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={deckView} onValueChange={val => setDeckView(val as DeckView)}>
          {Object.values(DeckView).map((deckView) => (
            <DropdownMenuRadioItem key={deckView} value={deckView}>
              {deckView}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
