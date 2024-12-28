import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import player from 'lottie-web'; 

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  ngAfterViewInit(): void {
    player.loadAnimation({
      container: document.getElementById('lottie-container')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animation/Animation_not_found.json', 
    });
  }
}
