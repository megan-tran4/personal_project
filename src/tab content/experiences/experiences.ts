import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [Card, CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {

  software_cards = [
    {
      title: 'Software Engineer', 
      company: 'Motorola Solutions',
      date: 'May 2025 - August 2025',
      content: ['Worked on two projects to streamline radio systems via STT and TTS capabilities', 'Utilized RESTful API, PostgreSQL, and AngularJS for web backend and frontend development', 'Collaborated with cross-functional teams to deliver high-quality software solutions']
    }, 
    {
      title: 'iOS Developer Intern', 
      company: 'Everyone Can Code',
      date: 'September 2023 - December 2023',
      content: ['Co-developed an iOS app aimed at streamlining the hospital call light system via Swift XCode', 'Designed and implemented filtering for patient data with Firebase for real-time syncing', 'Incorporated accessible design via more icons and less text for patients not fluent in English']
    }
  ]

  design_cards = [
    {
      title: 'UX Designer',
      company: 'Design Innovation',
      date: 'September 2025 - Present',
      content: ['Collaborate with 5 members on UX research and iterative prototyping for the CTA Ventra App', 'Design and prototype low- and mid-fidelity frames, and information architectures via Figma ']
    }
  ]
}
