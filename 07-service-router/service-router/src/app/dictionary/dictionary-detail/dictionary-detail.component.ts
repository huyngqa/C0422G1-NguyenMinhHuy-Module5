import {Component, OnInit} from '@angular/core';
import {World} from '../model/world';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  world: World = null;

  constructor(private worldService: DictionaryService, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const keyword = paramMap.get('world');
      this.world = this.worldService.translate(keyword);
    });
  }

  ngOnInit(): void {
  }
}
