import {Injectable} from '@angular/core';
import {Song} from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  playlist: Song[] = [{
    id: 'o7cA0MtTuYw',
    name: 'Karik - Chưa từng vì nhau'
  },
    {
      id: 'EwFyU2ou-lA',
      name: 'Karik - Lần cuối'
    },
    {
      id: 'amyPCmf9jrw',
      name: 'Karik - Đau vậy đủ rồi'
    },
    {
      id: 'HFUcWEiIRbk',
      name: 'Karik - Từng là tất cả'
    }];

  constructor() {
  }

  findSongById(id: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.playlist.length; i++) {
      if (this.playlist[i].id === id) {
        return this.playlist[i];
      }
      return null;
    }
    // return this.playlist.find(item => item.id === id);
  }
}
