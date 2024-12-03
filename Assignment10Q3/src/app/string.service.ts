import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  constructor() 
  { 

  }

  public CountCapital(str : string) : number
  {
    let i : number = 0;
    let count : number = 0;
    for(i = 0 ; i < str.length ; i++)
    {
      if(str[i] >= 'A' && str[i] <= 'Z')
      {
        count++;
      }
    }
    return count;
  }
}
