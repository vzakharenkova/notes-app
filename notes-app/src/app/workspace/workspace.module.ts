import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceComponent } from './workspace.component';
import { TagsManagerComponent } from './components/tags-manager/tags-manager.component';
import { TagsFilterPipe } from './pipes/tags-filter.pipe';
import { NoteComponent } from './components/note/note.component';
import { NotesFilterPipe } from './pipes/notes-filter.pipe';

const routes: Routes = [{ path: 'notes', component: WorkspaceComponent }];

@NgModule({
  declarations: [
    WorkspaceComponent,
    TagsManagerComponent,
    NoteComponent,
    TagsFilterPipe,
    NotesFilterPipe,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [TagsManagerComponent],
})
export class WorkspaceModule {}
