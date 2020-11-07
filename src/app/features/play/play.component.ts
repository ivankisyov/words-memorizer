import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAreWordsLoaded } from 'app/store';
import { loadWords } from 'app/store/words.actions';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'gtw-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
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
