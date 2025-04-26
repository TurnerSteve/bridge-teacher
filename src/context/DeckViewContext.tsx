
'use client'
import { DeckView } from "@/types/cards"
import { createContext, useContext, useState, useEffect } from "react"


type DeckViewContextType = {
  deckView: DeckView
  setDeckView: (algo: DeckView) => void
}

const DeckViewContext = createContext<DeckViewContextType | undefined>(undefined)

export function DeckViewProvider({ children }: { children: React.ReactNode }) {
  const [deckView, setDeckView] = useState<DeckView>(DeckView.IMAGE)

  useEffect(() => {
    const stored = localStorage.getItem("deckView")
    if (stored && Object.values(DeckView).includes(stored as DeckView)) {
      setDeckView(stored as DeckView)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("deckView", deckView)
  }, [deckView])

  return (
    <DeckViewContext.Provider value={{ deckView, setDeckView }}>
      {children}
    </DeckViewContext.Provider>
  )
}

export function useDeckView() {
  const ctx = useContext(DeckViewContext)
  if (!ctx) throw new Error("useDeckView must be within DeckViewProvider")
  return ctx
}
