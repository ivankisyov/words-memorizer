import { Action, createReducer, on } from '@ngrx/store';
import { IWord } from '@shared/data/models';

export const wordsFeatureKey = 'words';

export interface State {
  words: Array<IWord>;
}

export const initialState: State = {
  words: [],
};

export const reducer = createReducer(initialState);
