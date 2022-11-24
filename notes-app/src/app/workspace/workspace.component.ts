import { Component, OnInit } from '@angular/core';
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

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceService.getNotes().subscribe((res) => (this.notes = res.notes));
  }
}
