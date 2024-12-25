import React, { useState } from 'react';
import { Note } from './types/note';
import { ViewType } from './types/view';
import { SortConfig } from './types/sorting';
import { BackgroundConfig, defaultBackground } from './types/background';
import { NoteList } from './components/NoteList';
import { NoteEditor } from './components/NoteEditor';
import { Settings } from './components/Settings';
import { NoteSorter } from './components/NoteSorter';
import { sortNotes } from './utils/sortNotes';
import { getBackgroundClasses } from './utils/getBackgroundClasses';
import { PlusCircle, ListTodo, Settings as SettingsIcon } from 'lucide-react';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [view, setView] = useState<ViewType>('list');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    option: 'date',
    direction: 'desc'
  });
  const [background, setBackground] = useState<BackgroundConfig>(defaultBackground);

  const createNewNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: '',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'yellow',
      style: 'default',
    };
    setNotes([newNote, ...notes]);
    setCurrentNote(newNote);
  };

  const updateNote = (id: string, noteChanges: Partial<Note>) => {
    const updatedNotes = notes.map((note) => 
      note.id === id ? { ...note, ...noteChanges, updatedAt: new Date() } : note
    );
    setNotes(updatedNotes);
    if (currentNote?.id === id) {
      setCurrentNote({ ...currentNote, ...noteChanges, updatedAt: new Date() });
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currentNote?.id === id) {
      setCurrentNote(null);
    }
  };

  const sortedNotes = sortNotes(notes, sortConfig);

  return (
    <div className={`flex h-screen p-4 ${getBackgroundClasses(background)}`}>
      <div className="flex flex-col w-72 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/20">
        <div className="p-4">
          <button
            onClick={createNewNote}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            <PlusCircle size={20} />
            Nouvelle Note
          </button>
          <div className="flex rounded-xl overflow-hidden border border-gray-200/50 mt-4 bg-white/50">
            <button
              onClick={() => setView('list')}
              className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 ${
                view === 'list' ? 'bg-blue-50/80 text-blue-600' : 'hover:bg-white/80 text-gray-600'
              }`}
            >
              <ListTodo size={16} />
              Liste
            </button>
            <button
              onClick={() => setView('settings')}
              className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 ${
                view === 'settings' ? 'bg-blue-50/80 text-blue-600' : 'hover:bg-white/80 text-gray-600'
              }`}
            >
              <SettingsIcon size={16} />
              Paramètres
            </button>
          </div>
        </div>
        {view === 'list' && (
          <>
            <NoteSorter sortConfig={sortConfig} onSortChange={setSortConfig} />
            <NoteList
              notes={sortedNotes}
              onNoteSelect={setCurrentNote}
              onNoteDelete={deleteNote}
            />
          </>
        )}
      </div>
      <div className="flex-1 ml-4">
        {view === 'list' ? (
          <NoteEditor
            currentNote={currentNote}
            onNoteChange={(changes) => currentNote && updateNote(currentNote.id, changes)}
          />
        ) : (
          <Settings
            background={background}
            onBackgroundChange={setBackground}
          />
        )}
      </div>
    </div>
  );
}

export default App;