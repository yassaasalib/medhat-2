import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container relative">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `
})
export class App {
  name = 'Photography Portfolio';
}