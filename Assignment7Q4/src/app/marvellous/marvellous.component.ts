import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  public text :string = "";

  Uppercase()
  {
    this.text = "MARVELLOUS INFOSYSTEMS";
    return this.text;
  }

  Lowercase()
  {
    this.text = "marvellous infosystems";
    return this.text;
  }
}
