import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { AlgorithmDropdown } from './AlgorithmDropdown'
import { MultiDealDropdown } from './MultiDealDropdown'
import { PartialDealControls } from './PartialDealControls'
import { DeckViewDropdown } from './DeckViewDropdown'

export default function BoardController() {
  return (
    <div className="w-full px-5">
      <Card className="w-full px-5">
        <CardHeader>
          Dealing settings
        </CardHeader>
        <CardContent className="flex items-center gap-2">
            <DeckViewDropdown />
            <AlgorithmDropdown />
            <MultiDealDropdown/>
            <PartialDealControls />
        </CardContent>
      </Card>
    </div>
  )
}



