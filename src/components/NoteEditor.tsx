import React from 'react';
import { Note } from '../types/note';
import { NoteCustomizer } from './NoteCustomizer';
import { noteColors, noteStyles } from '../utils/noteStyles';

interface NoteEditorProps {
  currentNote: Note | null;
  onNoteChange: (note: Partial<Note>) => void;
}

export function NoteEditor({ currentNote, onNoteChange }: NoteEditorProps) {
  if (!currentNote) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        <p>Sélectionnez une note ou créez-en une nouvelle</p>
      </div>
    );
  }

  const containerClass = `flex-1 p-6 ${noteColors[currentNote.color]} ${
    noteStyles[currentNote.style]
  }`;

  return (
    <div className={containerClass}>
      <NoteCustomizer
        currentColor={currentNote.color}
        currentStyle={currentNote.style}
        onColorChange={(color) => onNoteChange({ color })}
        onStyleChange={(style) => onNoteChange({ style })}
      />
      <input
        type="text"
        value={currentNote.title}
        onChange={(e) => onNoteChange({ title: e.target.value })}
        placeholder="Titre de la note"
        className="w-full text-2xl font-semibold mb-4 p-2 border-b border-transparent focus:border-gray-300 focus:outline-none bg-transparent"
      />
      <textarea
        value={currentNote.content}
        onChange={(e) => onNoteChange({ content: e.target.value })}
        placeholder="Commencez à écrire..."
        className="w-full h-[calc(100vh-280px)] p-2 resize-none focus:outline-none bg-transparent"
      />
    </div>
  );
}