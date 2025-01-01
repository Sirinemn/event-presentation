import { AfterViewInit, Component } from '@angular/core';
import player from 'lottie-web'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit{
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
