export type NoteStyle = 'default' | 'post-it' | 'minimal';
export type NoteColor = 'default' | 'yellow' | 'blue' | 'green' | 'pink' | 'purple';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  color: NoteColor;
  style: NoteStyle;
  position?: {
    x: number;
    y: number;
  };
}