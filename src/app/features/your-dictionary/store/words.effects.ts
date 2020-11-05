import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addWord,
  editWord,
  deleteWord,
  setWords,
} from './words.actions';
import { Store } from '@ngrx/store';
import { selectAllWords } from './words.reducer';
import { withLatestFrom, map, tap } from 'rxjs/operators';
import { loadWords } from 'app/store';
import { LocalStorageService } from '@shared/data/services/local-storage.service';

@Injectable()
export class WordsEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  saveWordsToLocalStorate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addWord, editWord, deleteWord),
        withLatestFrom(this.store.select(selectAllWords)),
        tap(([_, words]) => {
          this.localStorageService.setWords(words);
        })
      ),
    { dispatch: false }
  );
  getWordsFromLocalStorage = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWords),
      map(() =>
        setWords({
          words: this.localStorageService.getWords(),
        })
      )
    )
  );
}
