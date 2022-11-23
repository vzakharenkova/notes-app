import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceComponent } from './workspace.component';
import { TagsManagerComponent } from './components/tags-manager/tags-manager.component';
import { TagsFilterPipe } from './pipes/tags-filter.pipe';

const routes: Routes = [{ path: 'notes', component: WorkspaceComponent }];

@NgModule({
  declarations: [WorkspaceComponent, TagsManagerComponent, TagsFilterPipe],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [TagsManagerComponent],
})
export class WorkspaceModule {}
