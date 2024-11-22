import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Assignment8Q4';

  public Data: string = "";

  updateData(event: Event): void {
    this.Data = (event.target as HTMLInputElement).value;
  }
}
