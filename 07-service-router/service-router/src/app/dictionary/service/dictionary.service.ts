import { Injectable } from '@angular/core';
import {World} from '../model/world';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  worlds: World[] = [
    {world: 'hello', mean: 'xin chào'},
    {world: 'hi', mean: 'cũng là xin chào mà ngắn hơn'},
    {world: 'goodbye', mean: 'tạm biệt'},
    {world: 'how are you?', mean: 'bạn có khoẻ không'},
    {world: 'i love you', mean: 'mình chia tay đi'}
  ];

  constructor() {
  }

  translate(world: string) {
    return this.worlds.filter(w => w.world === world)[0];
  }
  getAllWorld() {
    return this.worlds;
  }
}
