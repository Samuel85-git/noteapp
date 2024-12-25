import React from 'react';
import { NoteColor, NoteStyle } from '../types/note';
import { Palette, Layout } from 'lucide-react';

interface NoteCustomizerProps {
  currentColor: NoteColor;
  currentStyle: NoteStyle;
  onColorChange: (color: NoteColor) => void;
  onStyleChange: (style: NoteStyle) => void;
}

export function NoteCustomizer({
  currentColor,
  currentStyle,
  onColorChange,
  onStyleChange,
}: NoteCustomizerProps) {
  const colors: NoteColor[] = ['default', 'yellow', 'blue', 'green', 'pink', 'purple'];
  const styles: NoteStyle[] = ['default', 'post-it', 'minimal'];

  return (
    <div className="flex gap-4 mb-4 p-2 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Palette size={16} className="text-gray-500" />
        <div className="flex gap-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`w-6 h-6 rounded-full border-2 ${
                color === currentColor ? 'border-blue-500' : 'border-transparent'
              } ${color === 'default' ? 'bg-white' : `bg-${color}-100`}`}
              title={color}
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Layout size={16} className="text-gray-500" />
        <select
          value={currentStyle}
          onChange={(e) => onStyleChange(e.target.value as NoteStyle)}
          className="text-sm border rounded px-2 py-1"
        >
          <option value="default">Standard</option>
          <option value="post-it">Post-it</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
    </div>
  );
}