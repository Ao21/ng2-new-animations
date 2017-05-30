import { Component, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { ANIMATIONS } from './../../app.animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: [ANIMATIONS]
})
export class TitleComponent implements OnInit {
  @HostBinding('@titleComponent') public doAnimate = true;
  list = ['apples','oranges','elephants']

  constructor(
    private changeRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  swap() {
    this.list.push('hello');
  }

}
