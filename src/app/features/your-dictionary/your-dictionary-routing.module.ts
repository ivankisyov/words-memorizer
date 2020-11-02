import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourDictionaryComponent } from './your-dictionary.component';

const routes: Routes = [{ path: '', component: YourDictionaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourDictionaryRoutingModule { }
