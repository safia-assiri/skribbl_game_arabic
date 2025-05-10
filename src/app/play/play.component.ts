import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {

  colors: string[] = [
    '#FF6B6B', // coral red
    '#4ECDC4', // teal
    '#FFD93D', // golden yellow
    '#1A535C', // deep teal
    '#FF9F1C', // orange
    '#6A0572', // royal purple
    '#2EC4B6', // aqua
    '#E71D36', // crimson red
    '#3A86FF', // electric blue
    '#8338EC', // vibrant violet
    '#FF006E', // hot pink
    '#06D6A0', // mint green
    '#F9C80E', // sunflower yellow
    '#118AB2', // ocean blue
    '#EF476F', // watermelon
    '#B388EB', // soft purple
    '#F67280', // salmon
    '#C06C84', // dusty pink
    '#355C7D', // slate blue
    '#00B8A9'  // bright turquoise
  ];  
  
  i = 0;
  
  goNext() {
    const elements = document.querySelectorAll('.head, .body');
    this.i = (this.i + 1) % this.colors.length;
  
    for (let j = 0; j < elements.length; j++) {
      (elements[j] as HTMLElement).style.backgroundColor = this.colors[this.i];
    }
  }
  
  goBack() {
    const elements = document.querySelectorAll('.head, .body');
    this.i = (this.i - 1 + this.colors.length) % this.colors.length;
  
    for (let j = 0; j < elements.length; j++) {
      (elements[j] as HTMLElement).style.backgroundColor = this.colors[this.i];
    }
  }
}  
