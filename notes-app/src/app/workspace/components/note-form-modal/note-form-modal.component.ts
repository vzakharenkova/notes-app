import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Colors, NoteModel } from '../../models/workspace.models';

@Component({
  selector: 'app-note-form-modal',
  templateUrl: './note-form-modal.component.html',
  styleUrls: ['./note-form-modal.component.scss', '../../../shared/styles/note.style.scss'],
})
export class NoteFormModalComponent implements OnInit {
  colors = Colors;

  noteForm: FormGroup;

  requiredErrorMsg = 'This field is required';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { note: NoteModel } | null,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  get title() {
    return this.noteForm.get('title');
  }

  get description() {
    return this.noteForm.get('description');
  }

  get color() {
    return this.noteForm.get('color');
  }

  get tags() {
    return this.noteForm.get('tags');
  }

  removeTag(tag: string) {
    const index = this.tags?.value.indexOf(tag);
    if (index >= 0) {
      this.tags?.value.splice(index, 1);
    }
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags?.value.push(value);
    }
    event.chipInput!.clear();
  }

  private initForm() {
    this.noteForm = new FormGroup({
      title: new FormControl(this.data?.note.title || null, Validators.required),
      description: new FormControl(this.data?.note.description || null, Validators.required),
      color: new FormControl(this.data?.note.color || Colors.PINK, Validators.required),
      tags: new FormControl(this.data?.note.tags || []),
    });
  }
}
