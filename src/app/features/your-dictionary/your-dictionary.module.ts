import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDictionaryRoutingModule } from './your-dictionary-routing.module';
import { YourDictionaryComponent } from './your-dictionary.component';
import { StoreModule } from '@ngrx/store';
import * as fromWords from './store/words.reducer';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { EffectsModule } from '@ngrx/effects';
import { WordsEffects } from './store/words.effects';
import { MatIconModule } from '@angular/material/icon';
import { UiWordsFormModule } from '@shared/ui/ui-words-form/ui-words-form.module';

@NgModule({
  declarations: [YourDictionaryComponent],
  imports: [
    CommonModule,
    UiWordsFormModule,
    YourDictionaryRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromWords.wordsFeatureKey,
      fromWords.reducer
    ),
    EffectsModule.forFeature([WordsEffects]),
  ],
})
export class YourDictionaryModule {}
