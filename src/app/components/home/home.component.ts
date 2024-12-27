import { Component, AfterViewInit } from '@angular/core';
import player from 'lottie-web'; 
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [],
})
export class HomeComponent implements AfterViewInit {
  title = 'Evénement de Santé 2025';
  ngAfterViewInit(): void {
    player.loadAnimation({
      container: document.getElementById('lottie-container')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animation/Animation.json', 
    });
  }
}

