import { Component } from '@angular/core';
import { ProjDisplay } from "../../components/proj-display/proj-display";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ProjectPreview } from "../../components/project-preview/project-preview";

@Component({
  selector: 'app-projects',
  imports: [ProjDisplay, CommonModule, CarouselModule, ProjectPreview],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  
  // group all projects - make filter button to filter by category
  tech_projects = [
    {
      number: 1,
      title: 'Kalcom',
      date: 'Dec 2023',
      description: 'This app aimes to streamline the call light system by allowing patients to make more specific requests. This app includes icons for accessibility to those who may not be fluent in English.',
      tools: ['XCode', 'Firebase', 'Figma'],
      images: ['images/kalcom-1.jpeg', 'images/kalcom-3.png']
    }
  ]
  
  design_projects = [
    {
      title: 'CTA Ventra Remake',
      date: 'Dec 2025',
      tools: ['Figma'],
      image: 'images/ventra-cover.png',
    }, {
      title: 'Social Spotify',
      date: 'Oct 2025',
      tools: ['Figma'],
      image: '/images/spotify-cover.png',
    }
  ]
}
