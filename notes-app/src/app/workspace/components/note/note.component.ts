import { Component, Input } from '@angular/core';
import { NoteModel } from '../../models/workspace.models';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss', '../../../shared/styles/note.style.scss'],
})
export class NoteComponent {
  @Input() note: NoteModel;

  constructor(private workspaceService: WorkspaceService) {}

  cutInfo(term: string, length: number) {
    if (term.length > length) {
      return `${term.slice(0, length)}...`;
    }
    return term;
  }

  filterByTag(event: Event, tag: string) {
    event.stopPropagation();
    this.workspaceService.filterByTag(tag);
  }
}
