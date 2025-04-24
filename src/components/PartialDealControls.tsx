'use client'
import { useSettings } from '@/context/SettingsContext';

export function PartialDealControls() {
  const { partialDealSlots, setPartialDealSlots } = useSettings();

  function update(index: number, value: number) {
    const next = [...partialDealSlots];
    next[index] = Math.max(0, Math.min(13, value));
    setPartialDealSlots(next);
  }
  return (
    <div className="flex gap-4">
      {partialDealSlots.map((val, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <button
            className="bg-gray-200 px-2 rounded mb-1"
            onClick={() => update(idx, val + 1)}
            disabled={val >= 13}
            type="button"
          >
            ▲
          </button>
          <input
            type="number"
            min={0}
            max={13}
            value={val}
            onChange={e => update(idx, Number(e.target.value))}
            className="w-12 text-center border rounded"
          />
          <button
            className="bg-gray-200 px-2 rounded mt-1"
            onClick={() => update(idx, val - 1)}
            disabled={val <= 0}
            type="button"
          >
            ▼
          </button>
        </div>
      ))}
    </div>
  );
}
