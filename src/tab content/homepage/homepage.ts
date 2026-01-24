import { Component } from '@angular/core';
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-homepage',
  imports: [Projects],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
