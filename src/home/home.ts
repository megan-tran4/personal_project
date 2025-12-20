import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import  { Homepage } from '../homepage/homepage';

@Component({
  selector: 'app-home',
  imports: [ MatTabsModule, Homepage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home {
  constructor() { }
  tab : number = 0;

  onTabClick(tab : number) {
    this.tab = tab;
  }
}
