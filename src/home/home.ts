import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import  { Homepage } from '../tab content/homepage/homepage';
import { Experiences } from "../tab content/experiences/experiences";
import { Projects } from "../tab content/projects/projects";
import { About } from "../tab content/about/about";
import { Contact } from "../tab content/contact/contact";

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, Homepage, Experiences, Projects, About, Contact],
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
