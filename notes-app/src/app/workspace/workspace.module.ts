import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceComponent } from './workspace.component';
import { TagsManagerComponent } from './components/tags-manager/tags-manager.component';
import { TagsFilterPipe } from './pipes/tags-filter.pipe';
import { NoteComponent } from './components/note/note.component';
import { NotesFilterPipe } from './pipes/notes-filter.pipe';
import { NoteModalComponent } from './components/note-modal/note-modal.component';
import { NoteFormModalComponent } from './components/note-form-modal/note-form-modal.component';
import { HighlightDirective } from './directives/highlight.directive';

const routes: Routes = [
  { path: 'notes', component: WorkspaceComponent },
  { path: '**', redirectTo: 'notes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    WorkspaceComponent,
    TagsManagerComponent,
    NoteComponent,
    TagsFilterPipe,
    NotesFilterPipe,
    NoteModalComponent,
    NoteFormModalComponent,
    HighlightDirective,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceModule {}
