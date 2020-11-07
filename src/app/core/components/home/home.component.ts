import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAreWordsLoaded } from 'app/store';
import { tap, take } from 'rxjs/operators';
import { loadWords } from './../../../store/words.actions';

@Component({
  selector: 'gtw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
