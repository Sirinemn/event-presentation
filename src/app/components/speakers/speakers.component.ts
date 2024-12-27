import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {
  speakers = [ 
    { name: 'Dr. John Doe', bio: 'Expert en IA et santé.', photo: 'assets/images/john-doe.png' }, 
    { name: 'Dr. Jane Smith', bio: 'Spécialiste en technologies de la santé.', photo: 'assets/images/jane-smith.png' },
  ];
}
