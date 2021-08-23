import {Injectable} from '@angular/core';
import {Dictionary} from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Dictionary[] = [
    {
      id: '1',
      word: 'Hello',
      definition: 'Xin chào'
    },
    {
      id: '2',
      word: 'Morning',
      definition: 'Buổi sáng'
    },
    {
      id: '3',
      word: 'Love',
      definition: 'Tình yêu'
    },
    {
      id: '4',
      word: 'Input',
      definition: 'Bộ vào'
    },
    {
      id: '5',
      word: 'Output',
      definition: 'Bộ ra'
    },
    {
      id: '6',
      word: 'Fridge',
      definition: 'Tủ lạnh'
    },
    {
      id: '7',
      word: 'Computer',
      definition: 'Máy vi tính'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }

  findById(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dictionaries.length; i++) {
      if (this.dictionaries[i].id === id) {
        return this.dictionaries[i];
      }
    }
    return null;
  }
}
