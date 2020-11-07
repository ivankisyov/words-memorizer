import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { PlayService } from './play.service';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { UiMaterialModule } from '@shared/ui/ui-material/ui-material.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayRoutingModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    UiMaterialModule,
  ],
  providers: [PlayService],
})
export class PlayModule {}
