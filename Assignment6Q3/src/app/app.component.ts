import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2 class = "Name">Marvellous Infosystems</h2> <input type = "text">
  `,
  styles: `.Name{color : blue}`
})
export class AppComponent {
  title = 'Assignment6Q3';
}
