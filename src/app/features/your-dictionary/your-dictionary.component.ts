import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadWords } from 'app/store';
import { selectAllWords } from './store/words.reducer';
import { addWord } from './store/words.actions';

@Component({
  selector: 'gtw-your-dictionary',
  templateUrl: './your-dictionary.component.html',
  styleUrls: ['./your-dictionary.component.scss'],
})
export class YourDictionaryComponent implements OnInit {
  wordForm: FormGroup;
  allWords$ = this.store.select(selectAllWords);

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(loadWords());

    this.wordForm = this.formBuilder.group({
      enWord: [null, Validators.required],
      bgWord: [null, Validators.required],
    });
  }

  onSubmit(value: { enWord: string; bgWord: string }) {
    this.store.dispatch(
      addWord({
        word: {
          en: value.enWord,
          bg: value.bgWord,
          correctGuesses: 0,
          timesPlayed: 0,
          id: 'test-id',
        },
      })
    );

    this.wordForm.reset();
  }
}
