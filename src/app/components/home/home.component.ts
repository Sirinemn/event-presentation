import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import player from 'lottie-web'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LottieComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Evénement de Santé 2025';
  options: AnimationOptions = {
    path: '/animation/Animation.json'
  };

  static playerFactory() {
    return player;
  }

}
