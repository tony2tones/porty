import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highlight = false;

  onInViewportChange(inViewport: boolean) {
    this.highlight = inViewport;
  }
}
