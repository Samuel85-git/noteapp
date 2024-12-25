import { Note } from '../types/note';
import { SortConfig } from '../types/sorting';

export const sortNotes = (notes: Note[], { option, direction }: SortConfig): Note[] => {
  const sortedNotes = [...notes].sort((a, b) => {
    switch (option) {
      case 'title':
        return (a.title || 'Sans titre').localeCompare(b.title || 'Sans titre');
      case 'date':
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      case 'color':
        return a.color.localeCompare(b.color);
      default:
        return 0;
    }
  });

  return direction === 'desc' ? sortedNotes.reverse() : sortedNotes;
};