import { Pipe, PipeTransform } from '@angular/core';
import { NoteModel } from '../models/workspace.models';

@Pipe({
  name: 'notesFilter',
})
export class NotesFilterPipe implements PipeTransform {
  transform(notes: NoteModel[], filterTerm: string): NoteModel[] {
    if (notes && notes.length > 0 && filterTerm.length) {
      return notes.filter((note) =>
        note.tags.some((tag) => tag.toLowerCase().includes(filterTerm.toLowerCase())),
      );
    }

    return notes;
  }
}
