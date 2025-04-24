// lib/context/algorithm-context.tsx
'use client'
import { Algorithm } from "@/types/dealingAlgo-enum"
import { createContext, useContext, useState, useEffect } from "react"


type AlgorithmContextType = {
  algorithm: Algorithm
  setAlgorithm: (algo: Algorithm) => void
}

const AlgorithmContext = createContext<AlgorithmContextType | undefined>(undefined)

export function AlgorithmProvider({ children }: { children: React.ReactNode }) {
  const [algorithm, setAlgorithm] = useState<Algorithm>(Algorithm.Pavlicek)

  useEffect(() => {
    const stored = localStorage.getItem("algorithm")
    if (stored && Object.values(Algorithm).includes(stored as Algorithm)) {
      setAlgorithm(stored as Algorithm)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("algorithm", algorithm)
  }, [algorithm])

  return (
    <AlgorithmContext.Provider value={{ algorithm, setAlgorithm }}>
      {children}
    </AlgorithmContext.Provider>
  )
}

export function useAlgorithm() {
  const ctx = useContext(AlgorithmContext)
  if (!ctx) throw new Error("useAlgorithm must be within AlgorithmProvider")
  return ctx
}
