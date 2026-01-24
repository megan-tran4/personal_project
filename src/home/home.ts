import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import  { Homepage } from '../tab content/homepage/homepage';
import { Projects } from "../tab content/projects/projects";
import { About } from "../tab content/about/about";
import { Contact } from "../tab content/contact/contact";
import { Ventra } from "../ventra/ventra";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, Homepage, Projects, About, Contact, Ventra],
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
