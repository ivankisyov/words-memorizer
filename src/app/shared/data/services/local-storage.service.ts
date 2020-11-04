import { Injectable } from '@angular/core';
import { IWord } from '@shared/data/models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  wordsKey = 'gtwWords';

  setWords(words: Array<IWord>): void {
    localStorage.setItem(this.wordsKey, JSON.stringify(words));
  }

  getWords(): Array<IWord> {
    let words = [];
    const stringifiedWords = localStorage.getItem(this.wordsKey);

    if (stringifiedWords) {
      words = JSON.parse(stringifiedWords);
    }

    return words;
  }
}
