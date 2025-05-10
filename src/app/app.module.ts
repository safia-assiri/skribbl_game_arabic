import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';  // Import the InfoComponent
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, 
    AppComponent,
    InfoComponent,
    PlayComponent
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule {}
