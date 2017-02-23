import {Component} from '@angular/core';
import {Hero} from './Hero';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string;
  heroes: any;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
  }
}

