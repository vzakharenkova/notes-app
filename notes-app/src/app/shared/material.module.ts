import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
