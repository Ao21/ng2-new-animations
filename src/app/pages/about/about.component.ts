import { Component, OnInit, HostBinding } from '@angular/core';
import { ANIMATIONS } from './../../app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   animations: ANIMATIONS
})
export class AboutComponent implements OnInit {
  @HostBinding('@aboutAnimation') public doAnimate = true;
  constructor() { }

  ngOnInit() {
  }

}
