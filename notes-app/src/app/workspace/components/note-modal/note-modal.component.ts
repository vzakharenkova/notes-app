import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NoteModel } from '../../models/workspace.models';
import { WorkspaceService } from '../../services/workspace.service';
import { NoteFormModalComponent } from '../note-form-modal/note-form-modal.component';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss', '../../../shared/styles/note.style.scss'],
})
export class NoteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { note: NoteModel },
    public dialog: MatDialog,
    private workspaceService: WorkspaceService,
  ) {}

  openConfirmationModal() {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Delete note',
        content: `${this.data.note.title}`,
        handler: () => this.deleteNote(this.data.note),
      },
    });
  }

  openEditModal() {
    this.dialog.open(NoteFormModalComponent, {
      data: this.data,
    });
  }

  filterByTag(tag: string) {
    this.dialog.closeAll();
    this.workspaceService.filterByTag(tag);
  }

  deleteNote(note: NoteModel) {
    this.workspaceService.deleteNote(note);
    this.dialog.closeAll();
  }
}
