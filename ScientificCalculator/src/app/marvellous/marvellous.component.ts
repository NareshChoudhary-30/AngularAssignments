import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  from : string = 'decimal';
  to : string = 'binary';
  Data : string = '';
  result : string = '0';

  convert() : void
  {
    if(!this.Data)
    {
      this.result = 'Invalid Input';
      return;
    }

    try
    {
      let number = parseInt(this.Data, this.getRadix(this.from));
      this.result = number.toString(this.getRadix(this.to)).toUpperCase();
    }
    catch(e)
    {
      this.result = "Error in conversion";
    }
  }

  clear() : void 
  {
    this.Data = '';
    this.result = '0';
  }

  private getRadix(system : string) : number
  {
    switch(system)
    {
      case 'binary': return 2;
      case 'octal' : return 8;
      case 'decimal' : return 10;
      case 'hex' : return 16;
      default : return 10;
    }
  }
}
