import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { HelperService } from '@shared/services/helper.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { editWord, addWord } from '@shared/data/store/words.actions';

@Component({
  selector: 'gtw-ui-words-form',
  templateUrl: './ui-words-form.component.html',
  styleUrls: ['./ui-words-form.component.scss'],
})
export class UiWordsFormComponent implements OnInit {
  wordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UiWordsFormComponent>,
    private helperService: HelperService,
    private store: Store,
    @Inject(MAT_DIALOG_DATA)
    public data: { en: string; bg: string; id: string }
  ) {}

  ngOnInit(): void {
    this.wordForm = this.formBuilder.group({
      enWord: [this.data?.en || null, Validators.required],
      bgWord: [this.data?.bg || null, Validators.required],
    });
  }

  onSubmit(value: { enWord: string; bgWord: string }): void {
    // edit mode is on
    if (this.data) {
      this.store.dispatch(
        editWord({
          update: {
            id: this.data.id,
            changes: {
              en: value.enWord,
              bg: value.bgWord,
            },
          },
        })
      );
    } else {
      this.store.dispatch(
        addWord({
          word: {
            en: value.enWord,
            bg: value.bgWord,
            correctGuesses: 0,
            timesPlayed: 0,
            id: this.helperService.setId(),
          },
        })
      );
    }

    this.dialogRef.close();
  }
}
