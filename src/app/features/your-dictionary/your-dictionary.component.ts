import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { UiWordsFormComponent } from '@shared/ui/ui-words-form/ui-words-form.component';
import { selectAllWords, selectAreWordsLoaded } from 'app/store';
import { loadWords, deleteWord } from 'app/store/words.actions';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'gtw-your-dictionary',
  templateUrl: './your-dictionary.component.html',
  styleUrls: ['./your-dictionary.component.scss'],
})
export class YourDictionaryComponent implements OnInit {
  wordForm: FormGroup;
  allWords$ = this.store.select(selectAllWords);
  displayedColumns: string[] = ['en', 'bg', 'edit', 'delete'];

  constructor(private store: Store, public dialog: MatDialog) {}

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

  openDialog(): void {
    // dialogRef
    this.dialog.open(UiWordsFormComponent);
  }

  deleteWord(id: string): void {
    this.store.dispatch(deleteWord({ id }));
  }

  edit(word: { en: string; bg: string; id: string }): void {
    this.dialog.open(UiWordsFormComponent, {
      data: word,
    });
  }
}
