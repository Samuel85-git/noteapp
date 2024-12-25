import React from 'react';
import { NoteColor } from '../types/note';
import { Palette } from 'lucide-react';

interface PostItColorPickerProps {
  currentColor: NoteColor;
  onColorChange: (color: NoteColor) => void;
}

export function PostItColorPicker({ currentColor, onColorChange }: PostItColorPickerProps) {
  const colors: NoteColor[] = ['yellow', 'blue', 'green', 'pink', 'purple'];

  return (
    <div className="absolute bottom-2 right-2 group">
      <button className="p-1 rounded-full hover:bg-black/5">
        <Palette size={16} className="text-gray-500" />
      </button>
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex bg-white rounded-lg shadow-lg p-2 gap-1">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`
              w-6 h-6 rounded-full 
              ${color === currentColor ? 'ring-2 ring-offset-2 ring-blue-500' : ''}
              bg-${color}-100 hover:bg-${color}-200 
              transition-colors duration-200
            `}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}