import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WordsEffects } from './words.effects';

describe('WordsEffects', () => {
  let actions$: Observable<any>;
  let effects: WordsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(WordsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
