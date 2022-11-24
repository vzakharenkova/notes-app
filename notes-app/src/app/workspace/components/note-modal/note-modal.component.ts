import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NoteModel } from '../../models/workspace.models';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss', '../../../shared/styles/note.style.scss'],
})
export class NoteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { note: NoteModel },
    public dialog: MatDialog,
  ) {}

  openConfirmationModal() {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Delete note',
        content: `${this.data.note.title}`,
        // handler: () => this.deleteTask(this.column, this.task),
      },
    });
  }
}
