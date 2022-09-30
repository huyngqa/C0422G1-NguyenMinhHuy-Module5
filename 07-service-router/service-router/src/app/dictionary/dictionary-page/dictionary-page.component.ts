import { Component, OnInit } from '@angular/core';
import {World} from '../model/world';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  worlds: World[] = [];
  constructor(private worldService: DictionaryService) { }

  ngOnInit(): void {
    this.worlds = this.worldService.getAllWorld();
  }
}
