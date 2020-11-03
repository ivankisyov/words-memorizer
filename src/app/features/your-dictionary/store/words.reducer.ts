import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { IWord } from '@shared/data/models';
import * as WordsActions from './words.actions';

export const wordsFeatureKey = 'words';

export interface State extends EntityState<IWord> {}

export const adapter: EntityAdapter<IWord> = createEntityAdapter<IWord>();

export const initialState: State = adapter.getInitialState();

export const wordsReducer = createReducer(
  initialState,
  on(WordsActions.addWord, (state, { word }) => {
    return adapter.addOne(word, state);
  }),
  on(WordsActions.loadWords, (state, { words }) => {
    return adapter.setAll(words, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return wordsReducer(state, action);
}

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectWordsState = createFeatureSelector<State>(wordsFeatureKey);

export const selectAllWords = createSelector(selectWordsState, selectAll);
