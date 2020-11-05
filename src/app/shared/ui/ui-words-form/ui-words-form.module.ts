import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWordsFormComponent } from './ui-words-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UiWordsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [UiWordsFormComponent],
})
export class UiWordsFormModule {}
