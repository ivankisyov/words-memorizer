import { createAction, props } from '@ngrx/store';
import { IWord } from '@shared/data/models';

export const addWord = createAction('[Your Dictionary Page] Add Word', props<{ word: IWord }>());
export const deleteWord = createAction('[Your Dictionary Page] Delete Word', props<{ id: string }>());
export const setWords = createAction('[Local Storage] Set Words', props<{ words: Array<IWord> }>());
