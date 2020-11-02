import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDictionaryRoutingModule } from './your-dictionary-routing.module';
import { YourDictionaryComponent } from './your-dictionary.component';


@NgModule({
  declarations: [YourDictionaryComponent],
  imports: [
    CommonModule,
    YourDictionaryRoutingModule
  ]
})
export class YourDictionaryModule { }
