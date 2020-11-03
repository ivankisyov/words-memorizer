import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadWords } from 'app/store';

@Component({
  selector: 'gtw-your-dictionary',
  templateUrl: './your-dictionary.component.html',
  styleUrls: ['./your-dictionary.component.scss'],
})
export class YourDictionaryComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadWords());
  }
}
