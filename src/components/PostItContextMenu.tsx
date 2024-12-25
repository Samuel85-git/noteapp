import React from 'react';
import { NoteColor } from '../types/note';

interface PostItContextMenuProps {
  show: boolean;
  position: { x: number; y: number };
  currentColor: NoteColor;
  onColorChange: (color: NoteColor) => void;
  onClose: () => void;
}

export function PostItContextMenu({ 
  show, 
  position, 
  currentColor, 
  onColorChange,
  onClose 
}: PostItContextMenuProps) {
  if (!show) return null;

  const colors: NoteColor[] = ['yellow', 'blue', 'green', 'pink', 'purple'];
  const colorNames = {
    yellow: 'Jaune',
    blue: 'Bleu',
    green: 'Vert',
    pink: 'Rose',
    purple: 'Violet'
  };

  const handleColorChange = (color: NoteColor) => {
    onColorChange(color);
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div
        className="fixed z-50 bg-white rounded-lg shadow-lg py-1 w-48"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      >
        <div className="px-3 py-2 text-sm font-medium text-gray-600 border-b">
          Couleur du post-it
        </div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            className={`
              w-full px-3 py-2 text-left text-sm
              hover:bg-gray-100 flex items-center gap-2
              ${color === currentColor ? 'bg-gray-50' : ''}
            `}
          >
            <div className={`w-4 h-4 rounded-full bg-${color}-200`} />
            {colorNames[color]}
          </button>
        ))}
      </div>
    </>
  );
}