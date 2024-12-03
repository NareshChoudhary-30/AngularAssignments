import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public isprime : boolean = false;
  public Capitalcount : number = 0;

  public constructor(private obj : NumberService,private obj2 : StringService)
  {
    this.isprime = obj.ChkPrime(34);
    this.Capitalcount = obj2.CountCapital("Web Development using ANGULAR");
  }
}
