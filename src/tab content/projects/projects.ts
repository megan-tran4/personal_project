import { Component } from '@angular/core';
import { ProjDisplay } from "../../components/proj-display/proj-display";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-projects',
  imports: [ProjDisplay, CommonModule, CarouselModule],
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
      description: 'My team noticed the CTA Ventra App was quite difficult to navigate. We wanted to streamline processes and make the app more user-friendly. We used Figma to create a new version of the app that was easier to use and more visually appealing. I specifically worked on the map sections, and collaborated on info architecture',
      tools: ['Figma'],
      images: ['images/ventra-highfi-1.png', 'images/ventra-highfi-2.png', 'images/ventra-highfi-3.png', 'images/ventra-highfi-4.png']
    }, {
      title: 'Social Spotify',
      date: 'Oct 2025',
      description: 'I wanted to redesign a new concept of a more social version of Spotify. I used Figma to create a new version of the app that was easier to use and more visually appealing. I specifically worked on the map sections, and collaborated on info architecture',
      tools: ['Figma'],
      images: ['images/spotify-highfi-1.png', 'images/spotify-highfi-2.png']  
    }
  ]
}
