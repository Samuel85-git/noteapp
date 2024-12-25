import { NoteColor, NoteStyle } from '../types/note';

export const noteColors: Record<NoteColor, string> = {
  default: 'bg-white',
  yellow: 'bg-yellow-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  pink: 'bg-pink-100',
  purple: 'bg-purple-100',
};

export const noteStyles: Record<NoteStyle, string> = {
  default: 'rounded-lg shadow-sm',
  'post-it': 'rotate-1 shadow-md',
  minimal: 'border border-gray-200',
};