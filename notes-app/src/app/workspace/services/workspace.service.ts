import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from '../models/workspace.models';
import { Observable, of, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {
    this.getTagsfromJSON();
    this.getNotesfromJSON();
  }

  filterTerm$ = new Subject<string>();

  tags: string[] = [];

  notes: NoteModel[] = [];

  checkTag(tag: string) {
    return this.tags.includes(tag);
  }

  tagIsUsed(tag: string) {
    return this.notes.some((note) => note.tags.includes(tag));
  }

  getTags(): Observable<string[]> {
    return of(this.tags);
  }

  createTag(tag: string) {
    this.tags.push(tag);
  }

  deleteTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  getNotes(): Observable<NoteModel[]> {
    return of(this.notes);
  }

  createNote(note: NoteModel) {
    this.notes.push(note);
  }

  deleteNote(note: NoteModel) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

  updateNote(note: NoteModel) {
    const selectedNote = <NoteModel>this.notes.find((n) => note.id === n.id);
    const index = this.notes.indexOf(selectedNote);
    this.notes[index] = note;
  }

  filterByTag(tag: string) {
    this.filterTerm$.next(tag);
  }

  private getTagsfromJSON() {
    this.http
      .get<{ tags: string[] }>(`assets/tags.json`)
      .pipe(take(1))
      .subscribe((res) => res.tags.forEach((tag) => this.tags.push(tag)));
  }

  private getNotesfromJSON() {
    return this.http
      .get<{ notes: NoteModel[] }>(`assets/notes.json`)
      .pipe(take(1))
      .subscribe((res) => res.notes.forEach((note) => this.notes.push(note)));
  }
}
