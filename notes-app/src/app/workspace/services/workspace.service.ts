import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from '../models/workspace.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}

  filterTerm$ = new Subject<string>();

  getTags() {
    return this.http.get<{ tags: string[] }>(`assets/tags.json`);
  }

  getNotes() {
    return this.http.get<{ notes: NoteModel[] }>(`assets/notes.json`);
  }

  filterByTag(tag: string) {
    this.filterTerm$.next(tag);
  }
}
