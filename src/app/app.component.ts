import { Component } from '@angular/core';
import { ANIMATIONS } from './app.animations';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: ANIMATIONS
})
export class AppComponent {
  title = 'app works!';

  prepareRouteAnimation(r: RouterOutlet) {
    const value = r.activatedRouteData['animation'];
    return value;
  }
}
