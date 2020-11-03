import { createAction, createReducer, on, Action, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  loading: boolean;
}

export const initialState: AppState = {
  loading: false,
};

export const uiKey = 'ui';

export const loadWords = createAction('[Your Dictionary Page] Load Words');

const appReducer = createReducer(
  initialState,
  on(loadWords, (state) => ({ ...state, loading: true }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
