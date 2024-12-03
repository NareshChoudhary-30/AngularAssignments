import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent 
{
  public Addres : number = 0;
  public Subres : number = 0;

  public constructor(private obj : ArithmeticService)
  {
    this.Addres = obj.Add(20,5);
    this.Subres = obj.Sub(20,5);
  }
}
