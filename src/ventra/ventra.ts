import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-ventra',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './ventra.html',
  styleUrl: './ventra.css',
})
export class Ventra {

  lowFis: string[] = [
    './images/ventra-lowfi-1.png',
    './images/ventra-lowfi-2.png',
    './images/ventra-lowfi-3.png',
    './images/ventra-lowfi-4.png'
  ]

  otherLowFis: string[] = [
    './images/other-ventra-lowfi-1.png',
    './images/other-ventra-lowfi-2.png',
    './images/other-ventra-lowfi-3.png',
    './images/other-ventra-lowfi-4.png',
    './images/other-ventra-lowfi-5.png',
    './images/other-ventra-lowfi-6.png'
  ]

  highFis: string[] = [
    './images/ventra-highfi-1.png',
    './images/ventra-highfi-2.png',
    './images/ventra-highfi-3.png',
    './images/ventra-highfi-4.png'
  ];

  otherHighFis: string[] = [
    './images/other-ventra-highfi-1.png',
    './images/other-ventra-highfi-2.png',
    './images/other-ventra-highfi-3.png',
    './images/other-ventra-highfi-4.png',
    './images/other-ventra-highfi-5.png',
    './images/other-ventra-highfi-6.png',
    './images/other-ventra-highfi-7.png',
    './images/other-ventra-highfi-8.png'
  ];
}
