import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proj-display',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './proj-display.html',
  styleUrl: './proj-display.css',
})
export class ProjDisplay {
  @Input() name!: string;
  @Input() date!: string;
  @Input() description!: string;
  @Input() tools!: string[];
  @Input() images: string[] = [];
}
