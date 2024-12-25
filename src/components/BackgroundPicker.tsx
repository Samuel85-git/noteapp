import React from 'react';
import { Palette, Grid, Layers } from 'lucide-react';
import { BackgroundConfig, BackgroundType } from '../types/background';

interface BackgroundPickerProps {
  config: BackgroundConfig;
  onChange: (config: BackgroundConfig) => void;
}

export function BackgroundPicker({ config, onChange }: BackgroundPickerProps) {
  const backgroundTypes: { value: BackgroundType; icon: React.ReactNode; label: string }[] = [
    { value: 'gradient', icon: <Layers size={16} />, label: 'Dégradé' },
    { value: 'solid', icon: <Palette size={16} />, label: 'Uni' },
    { value: 'pattern', icon: <Grid size={16} />, label: 'Motif' },
  ];

  const colors = [
    { label: 'Bleu-Violet', color1: 'from-blue-50', color2: 'to-purple-50' },
    { label: 'Rose-Orange', color1: 'from-rose-50', color2: 'to-orange-50' },
    { label: 'Vert-Cyan', color1: 'from-green-50', color2: 'to-cyan-50' },
    { label: 'Indigo-Rose', color1: 'from-indigo-50', color2: 'to-rose-50' },
  ];

  const patterns = [
    { label: 'Points', value: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)_repeat] bg-[length:20px_20px]' },
    { label: 'Lignes', value: 'bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[length:20px_20px]' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="space-y-4">
        <div className="flex gap-2">
          {backgroundTypes.map(({ value, icon, label }) => (
            <button
              key={value}
              onClick={() => onChange({ ...config, type: value })}
              className={`flex-1 flex items-center justify-center gap-1 p-2 rounded-lg text-sm
                ${config.type === value ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              title={label}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {config.type === 'gradient' && (
          <div className="grid grid-cols-2 gap-2">
            {colors.map(({ label, color1, color2 }) => (
              <button
                key={label}
                onClick={() => onChange({ ...config, color1, color2 })}
                className={`p-2 rounded-lg text-sm h-8
                  bg-gradient-to-br ${color1} ${color2}
                  ${config.color1 === color1 ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-300'}
                `}
                title={label}
              />
            ))}
          </div>
        )}

        {config.type === 'pattern' && (
          <div className="space-y-2">
            {patterns.map(({ label, value }) => (
              <button
                key={label}
                onClick={() => onChange({ ...config, pattern: value })}
                className={`w-full p-2 rounded-lg text-sm text-left
                  ${config.pattern === value ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}