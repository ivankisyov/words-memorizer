import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IWord } from '@shared/data/models';
import { selectAllWords } from 'app/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HelperService } from '@shared/services/helper.service';

@Injectable()
export class PlayService {
  private _allWords: Array<IWord>;
  private _currentWordToGuess: IWord;

  constructor(
    private store: Store,
    private helperService: HelperService
  ) {}

  wordToGuess(): Observable<IWord> {
    return this.store.select(selectAllWords).pipe(
      tap((words) => {
        this._allWords = words;
      }),
      map((words) => this._shuffleWords(words))
    );
  }

  possibleChoices(): Array<IWord> {
    const filteredChoices = this._allWords.filter(
      (word) => word !== this._currentWordToGuess
    );

    const shuffledChoices = this.helperService.shuffle([
      ...filteredChoices.slice(0, 2),
      this._currentWordToGuess,
    ]);

    return shuffledChoices;
  }

  isAnswerCorrect(choice: string): boolean {
    return choice === this._currentWordToGuess.en;
  }

  private _shuffleWords(words): IWord {
    this._currentWordToGuess = this.helperService.shuffle(words)[0];

    return this._currentWordToGuess;
  }
}
