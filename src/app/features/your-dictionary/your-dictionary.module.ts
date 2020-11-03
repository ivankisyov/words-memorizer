import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDictionaryRoutingModule } from './your-dictionary-routing.module';
import { YourDictionaryComponent } from './your-dictionary.component';
import { StoreModule } from '@ngrx/store';
import * as fromWords from './store/words.reducer';

@NgModule({
  declarations: [YourDictionaryComponent],
  imports: [
    CommonModule,
    YourDictionaryRoutingModule,
    StoreModule.forFeature(fromWords.wordsFeatureKey, fromWords.reducer),
  ],
})
export class YourDictionaryModule {}
