import { Component, OnInit, HostBinding} from '@angular/core';
import { ANIMATIONS } from './../../app.animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: ANIMATIONS
})
export class HomeComponent implements OnInit {
  @HostBinding('@homeAnimation') public doAnimate = true;
  constructor() { }

  ngOnInit() {
  }

}
