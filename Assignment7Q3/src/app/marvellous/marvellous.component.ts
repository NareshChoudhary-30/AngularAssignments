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
  public str : string = "Marvellous Infosystems";

  Change()
  {
    this.str = "Educating for better tomorrow";
    return this.str;
  }

}
