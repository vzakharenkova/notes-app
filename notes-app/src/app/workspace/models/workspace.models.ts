export interface NoteModel {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: Colors;
}

export enum Colors {
  BLUE = 'blue',
  PINK = 'pink',
  GRAPE = 'grape',
  YELLOW = 'yellow',
  SILVER = 'silver',
  BLACK = 'black',
}
