import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  languages = ['C++', 'Python', 'Javascript', 'Java', 'HTML', 'CSS', 'Swift', 'SQL'];
  frameworks = ['AngularJS', 'Github', 'Figma', 'Jupyter Notebook', 'Anaconda', 'XCode'];
  courses = {'CS225' : 'Data Structures and Algorithms', 'CS361' : 'Probability and Statistics for Computer Science'};

}
