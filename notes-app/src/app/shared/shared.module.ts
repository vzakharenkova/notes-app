import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, BrowserAnimationsModule, MaterialModule],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
