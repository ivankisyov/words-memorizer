import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addWord } from './words.actions';
// wat
import { LocalStorageService } from './../../../shared/data/services/local-storage.service';
import { Store } from '@ngrx/store';
import { selectAllWords } from './words.reducer';
import { withLatestFrom, map, tap } from 'rxjs/operators';

@Injectable()
export class WordsEffects {
  constructor(private actions$: Actions, private localStorageService: LocalStorageService, private store: Store) {}

  saveWordsToLocalStorate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addWord),
        withLatestFrom(this.store.select(selectAllWords)),
        tap(([_, words]) => {
          this.localStorageService.setWords(words);
        })
      ),
    { dispatch: false }
  );
}
