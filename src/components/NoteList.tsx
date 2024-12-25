import React from 'react';
import { Note } from '../types/note';
import { Clock, Trash2 } from 'lucide-react';
import { noteColors, noteStyles } from '../utils/noteStyles';

interface NoteListProps {
  notes: Note[];
  onNoteSelect: (note: Note) => void;
  onNoteDelete: (id: string) => void;
}

export function NoteList({ notes, onNoteSelect, onNoteDelete }: NoteListProps) {
  return (
    <div className="w-64 bg-gray-50 h-screen overflow-y-auto border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Mes Notes</h2>
        <div className="space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-3 cursor-pointer ${noteColors[note.color]} ${noteStyles[note.style]}`}
              onClick={() => onNoteSelect(note)}
            >
              <h3 className="font-medium text-gray-800 truncate">
                {note.title || 'Sans titre'}
              </h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {new Date(note.updatedAt).toLocaleDateString()}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNoteDelete(note.id);
                  }}
                  className="p-1 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}