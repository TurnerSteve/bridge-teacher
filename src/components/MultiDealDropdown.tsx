// src/components/MultiDealDropdown.tsx
'use client'
import { MULTI_DEAL_OPTIONS, useSettings } from '@/context/SettingsContext';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';


export function MultiDealDropdown() {
  const { multiDealCount, setMultiDealCount } = useSettings();
  const [customValue, setCustomValue] = useState('');

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only digits
    setCustomValue(value);
    if (value) setMultiDealCount(Number(value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-blue-500 text-white rounded">
        Multi Deal Count: {multiDealCount}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={
            (MULTI_DEAL_OPTIONS as readonly number[]).includes(multiDealCount)
              ? multiDealCount.toString()
              : 'custom'
          }
          onValueChange={val => {
            if (val === 'custom') return;
            setMultiDealCount(Number(val));
            setCustomValue('');
          }}
        >
          {MULTI_DEAL_OPTIONS.map(opt => (
            <DropdownMenuRadioItem key={opt} value={opt.toString()}>
              {opt}
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuRadioItem value="custom" className="flex items-center gap-2">
            <span>Custom:</span>
            <input
              type="number"
              min={1}
              className="w-16 border px-1 py-0.5 rounded text-right"
              value={
                (MULTI_DEAL_OPTIONS as readonly number[]).includes(multiDealCount)
                  ? customValue
                  : multiDealCount
              }
              onChange={handleCustomInput}
              placeholder="Any"
            />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
