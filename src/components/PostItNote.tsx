import React, { useRef, useState } from 'react';
import { Note } from '../types/note';
import Draggable from 'react-draggable';
import { PostItContextMenu } from './PostItContextMenu';

interface PostItNoteProps {
  note: Note;
  onNoteChange: (note: Partial<Note>) => void;
  onSelect: () => void;
}

export function PostItNote({ note, onNoteChange, onSelect }: PostItNoteProps) {
  const nodeRef = useRef(null);
  const [contextMenu, setContextMenu] = useState({
    show: false,
    position: { x: 0, y: 0 }
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  const handleDragStop = (_e: any, data: { x: number; y: number }) => {
    const newPosition = { x: data.x, y: data.y };
    onNoteChange({ position: newPosition });
  };

  const baseStyle = `
    w-64 h-64 p-4 cursor-move
    shadow-[2px_2px_8px_rgba(0,0,0,0.15)]
    bg-gradient-to-b from-${note.color}-50 to-${note.color}-100
    transform rotate-[1deg]
    hover:shadow-[4px_4px_12px_rgba(0,0,0,0.2)]
    transition-shadow duration-200
  `;

  const cornerFoldStyle = `
    after:content-['']
    after:absolute after:right-0 after:top-0
    after:w-0 after:h-0
    after:border-t-[20px] after:border-r-[20px]
    after:border-t-${note.color}-200
    after:border-r-transparent
    after:shadow-[-2px_2px_3px_rgba(0,0,0,0.1)]
  `;

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        position={note.position}
        onStop={handleDragStop}
        bounds="parent"
      >
        <div
          ref={nodeRef}
          className={`${baseStyle} ${cornerFoldStyle} relative`}
          onClick={onSelect}
          onContextMenu={handleContextMenu}
        >
          <div className="absolute top-[-8px] left-[50%] transform translate-x-[-50%]">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
          </div>
          <input
            type="text"
            value={note.title}
            onChange={(e) => onNoteChange({ title: e.target.value })}
            className="w-full bg-transparent border-none outline-none font-medium mb-2"
            placeholder="Titre"
            onClick={(e) => e.stopPropagation()}
          />
          <textarea
            value={note.content}
            onChange={(e) => onNoteChange({ content: e.target.value })}
            className="w-full h-[calc(100%-2rem)] bg-transparent border-none outline-none resize-none"
            placeholder="Contenu de la note..."
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </Draggable>

      <PostItContextMenu
        show={contextMenu.show}
        position={contextMenu.position}
        currentColor={note.color}
        onColorChange={(color) => onNoteChange({ color })}
        onClose={() => setContextMenu({ ...contextMenu, show: false })}
      />
    </>
  );
}