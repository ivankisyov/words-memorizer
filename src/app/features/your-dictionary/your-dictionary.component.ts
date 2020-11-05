import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadWords } from 'app/store';
import { selectAllWords } from './store/words.reducer';
import { addWord, deleteWord } from './store/words.actions';
import { HelperService } from '@shared/services/helper.service';

@Component({
  selector: 'gtw-your-dictionary',
  templateUrl: './your-dictionary.component.html',
  styleUrls: ['./your-dictionary.component.scss'],
})
export class YourDictionaryComponent implements OnInit {
  wordForm: FormGroup;
  allWords$ = this.store.select(selectAllWords);
  displayedColumns: string[] = ['en', 'bg', 'edit', 'delete'];
  wantToAddNewWord = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private helperService: HelperService
  ) {}

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
          id: this.helperService.setId(),
        },
      })
    );

    this.wordForm.reset();
    this.wantToAddNewWord = false;
  }

  showForm(): void {
    this.wantToAddNewWord = true;
  }

  deleteWord(id: string): void {
    this.store.dispatch(deleteWord({ id }));
  }

  edit(id: string): void {
    console.log('edit -> id', id);
  }
}
