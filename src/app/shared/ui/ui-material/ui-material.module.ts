import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarComponent } from './components/snackbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [SnackbarComponent],
  exports: [
    MatCardModule,
    MatButtonModule,
    SnackbarComponent,
    MatIconModule,
  ],
})
export class UiMaterialModule {}
