import React from 'react';
import { Note } from '../types/note';
import { PostItNote } from './PostItNote';

interface PostItBoardProps {
  notes: Note[];
  onNoteChange: (id: string, changes: Partial<Note>) => void;
  onNoteSelect: (note: Note) => void;
}

export function PostItBoard({ notes, onNoteChange, onNoteSelect }: PostItBoardProps) {
  return (
    <div className="flex-1 relative bg-gray-50 overflow-hidden">
      {notes.filter(note => note.style === 'post-it').map((note) => (
        <PostItNote
          key={note.id}
          note={note}
          onNoteChange={(changes) => onNoteChange(note.id, changes)}
          onSelect={() => onNoteSelect(note)}
        />
      ))}
    </div>
  );
}