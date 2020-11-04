import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDictionaryRoutingModule } from './your-dictionary-routing.module';
import { YourDictionaryComponent } from './your-dictionary.component';
import { StoreModule } from '@ngrx/store';
import * as fromWords from './store/words.reducer';

import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { EffectsModule } from '@ngrx/effects';
import { WordsEffects } from './store/words.effects';

@NgModule({
  declarations: [YourDictionaryComponent],
  imports: [
    CommonModule,
    YourDictionaryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromWords.wordsFeatureKey, fromWords.reducer),
    EffectsModule.forFeature([WordsEffects]),
  ],
})
export class YourDictionaryModule {}
