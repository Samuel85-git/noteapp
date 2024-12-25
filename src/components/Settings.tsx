import React from 'react';
import { BackgroundPicker } from './BackgroundPicker';
import { BackgroundConfig } from '../types/background';
import { Settings as SettingsIcon } from 'lucide-react';

interface SettingsProps {
  background: BackgroundConfig;
  onBackgroundChange: (config: BackgroundConfig) => void;
}

export function Settings({ background, onBackgroundChange }: SettingsProps) {
  return (
    <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon className="text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">Paramètres</h2>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Apparence</h3>
          <BackgroundPicker config={background} onChange={onBackgroundChange} />
        </section>
      </div>
    </div>
  );
}