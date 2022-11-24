import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteFormModalComponent } from './components/note-form-modal/note-form-modal.component';
import { NoteModalComponent } from './components/note-modal/note-modal.component';
import { NoteModel } from './models/workspace.models';
import { WorkspaceService } from './services/workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  notes: NoteModel[];

  filterTerm: string = '';

  constructor(private workspaceService: WorkspaceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.workspaceService.getNotes().subscribe((res) => (this.notes = res.notes));
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
}
