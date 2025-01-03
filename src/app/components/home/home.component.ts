import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import player from 'lottie-web'; 
import gsap from 'gsap'
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    RouterModule
  ],
})
export class HomeComponent implements AfterViewInit, OnInit{

  ngOnInit(): void {
    this.animateElements
  }
  animateElements() { 
    gsap.from('.home h1', { duration: 1, opacity: 0, y: -50 });
    gsap.from('.home-text', { duration: 1, opacity: 0, x: -50, stagger: 0.3 }); 
    gsap.from('.home-image', { duration: 1, opacity: 0, x: 50, delay: 0.5 }); 
    gsap.from('.cta-section', { duration: 1, opacity: 0, y: 50, delay: 1 }); 
  } 
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

