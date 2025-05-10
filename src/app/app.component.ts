import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PlayComponent } from "./play/play.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoComponent, PlayComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skribbl_game_arabic';
}
