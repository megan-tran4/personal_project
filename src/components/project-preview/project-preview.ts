import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-preview',
  imports: [CommonModule],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.css',
})
export class ProjectPreview {
  constructor(private router: Router) {}

  goToProject(link: string) {
    console.log("Navigating to project:", link);
    this.router.navigate(['/Ventra']);
  } 
  @Input() title!: string;
  @Input() date!: string;
  @Input() tools!: string;
  @Input() image!: string;

}
