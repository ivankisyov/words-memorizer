import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { HelperService } from '@shared/services/helper.service';
import { addWord } from 'app/features/your-dictionary/store/words.actions';

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
    private store: Store
  ) {}

  ngOnInit(): void {
    this.wordForm = this.formBuilder.group({
      enWord: [null, Validators.required],
      bgWord: [null, Validators.required],
    });
  }

  onSubmit(value: { enWord: string; bgWord: string }): void {
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
    this.dialogRef.close();
  }
}
