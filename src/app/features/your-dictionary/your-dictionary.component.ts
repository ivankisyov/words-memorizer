import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadWords } from 'app/store';
import { selectAllWords } from './store/words.reducer';
import { deleteWord } from './store/words.actions';
import { MatDialog } from '@angular/material/dialog';
import { UiWordsFormComponent } from '@shared/ui/ui-words-form/ui-words-form.component';

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
    this.store.dispatch(loadWords());
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
