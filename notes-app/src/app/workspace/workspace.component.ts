import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { NoteFormModalComponent } from './components/note-form-modal/note-form-modal.component';
import { NoteModalComponent } from './components/note-modal/note-modal.component';
import { NoteModel } from './models/workspace.models';
import { WorkspaceService } from './services/workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  notes: NoteModel[];

  filterTerm: string = '';

  private destroy$ = new Subject<void>();

  constructor(private workspaceService: WorkspaceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.workspaceService
      .getNotes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((notes) => (this.notes = notes));
    this.workspaceService.filterTerm$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filterTerm) => (this.filterTerm = filterTerm));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openNote(note: NoteModel) {
    this.dialog.open(NoteModalComponent, {
      data: {
        note,
      },
    });
  }

  openCreationForm() {
    this.dialog.open(NoteFormModalComponent);
  }

  filterNotes(tag: string) {
    this.workspaceService.filterByTag(tag);
  }
}
