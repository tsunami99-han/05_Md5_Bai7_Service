import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../../../models/dictionary';
import {DictionaryService} from '../../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: Dictionary = {};

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      // @ts-ignore
      this.dictionary = this.dictionaryService.findById(id);
    });
  }


}
