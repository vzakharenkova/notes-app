import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkspaceModule } from '../workspace/workspace.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, SharedModule, WorkspaceModule],
  exports: [SharedModule, WorkspaceModule],
})
export class CoreModule {}
