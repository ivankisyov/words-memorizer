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

@NgModule({
  declarations: [YourDictionaryComponent],
  imports: [
    CommonModule,
    YourDictionaryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromWords.wordsFeatureKey, fromWords.reducer),
  ],
})
export class YourDictionaryModule {}
