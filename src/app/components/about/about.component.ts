import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  description = 'À propos de l\'événement Santé 2025. Un événement unique qui rassemble les meilleurs experts de la santé pour discuter des dernières avancées.'
}
