import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() 
  { 

  }

  public ChkPrime(value : number) : boolean
  {
    if(value <= 1)
    {
      return false;
    }
    else
    {
      for(let i = 2; i < Math.sqrt(value) + 1; i++)
      {
        if(value % i === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
}
