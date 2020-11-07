import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAreWordsLoaded } from 'app/store';
import { loadWords } from 'app/store/words.actions';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { IWord } from '@shared/data/models';
import { PlayService } from './play.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@shared/ui/ui-material/components/snackbar.component';

@Component({
  selector: 'gtw-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  wordToGuess$: Observable<IWord>;
  possibleChoices: Array<IWord>;
  guessForm: FormGroup;
  playAgain = false;

  constructor(
    private store: Store,
    private playService: PlayService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._loadWords();
    this._setWordToGuess();
    this._buidForm();
  }

  onSubmit({ choice }): void {
    const isAnswerCorrect = this.playService.isAnswerCorrect(choice);
    const feedback = isAnswerCorrect ? 'Correct!' : 'Wrong :(';
    const feedbackClass = isAnswerCorrect ? 'correct' : 'wrong';

    this.snackBar.openFromComponent(SnackbarComponent, {
      data: feedback,
      panelClass: feedbackClass,
      duration: 2000,
    });

    this.playAgain = true;
  }

  loadNewWord(): void {
    this._setWordToGuess();
    this.playAgain = false;
  }

  private _buidForm(): void {
    this.guessForm = this.formBuilder.group({
      choice: ['', Validators.required],
    });
  }

  private _setWordToGuess(): void {
    this.wordToGuess$ = this.playService
      .wordToGuess()
      .pipe(
        tap(
          () =>
            (this.possibleChoices = this.playService.possibleChoices())
        )
      );
  }

  private _loadWords(): void {
    this.store
      .select(selectAreWordsLoaded)
      .pipe(
        tap((areWordsLoaded) => {
          if (!areWordsLoaded) {
            this.store.dispatch(loadWords());
          }
        }),
        take(1)
      )
      .subscribe();
  }
}
