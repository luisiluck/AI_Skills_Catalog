import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="header">
      <h1>AI Skills Catalog</h1>
      <p>Angular + Express + MongoDB</p>
    </header>
    <main class="main">
      <router-outlet />
    </main>
  `,
  styles: `
    .header {
      background: #16213e;
      color: #fff;
      padding: 1.5rem 2rem;
    }
    .header h1 {
      margin: 0 0 0.25rem;
      font-size: 1.5rem;
    }
    .header p {
      margin: 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }
    .main {
      max-width: 720px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
  `,
})
export class AppComponent {}
