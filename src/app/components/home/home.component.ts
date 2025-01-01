import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import player from 'lottie-web'; 
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    RouterModule
  ],
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    player.loadAnimation({
      container: document.getElementById('lottie-container')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animation/Animation - arrow.json', 
    });
  }

}

