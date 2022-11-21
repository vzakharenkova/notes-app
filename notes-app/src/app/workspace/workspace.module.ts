import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [{ path: 'notes', component: WorkspaceComponent }];

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class WorkspaceModule {}
