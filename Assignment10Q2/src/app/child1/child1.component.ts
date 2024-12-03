import { Component } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component 
{
  public isprime : boolean = false;

  public constructor(private obj : NumberService)
  {
    this.isprime = obj.ChkPrime(29);
  }

}
