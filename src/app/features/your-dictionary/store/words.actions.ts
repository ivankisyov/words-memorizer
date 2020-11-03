import { createAction, props } from '@ngrx/store';
import { IWord } from '@shared/data/models';

export const addWord = createAction('[Your Dictionary Page] Add Word', props<{ word: IWord }>());
export const loadWords = createAction('[Local Storage] Load Words', props<{ words: Array<IWord> }>());
