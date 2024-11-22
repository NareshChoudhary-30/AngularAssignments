import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value : number,param : string) : string 
  {
    let res : string = "";
    if(param == "Prime")
    {
      if(value < 2)
      {
        res = "It is not a Prime number"
      }
      else
      {
        let isPrime : boolean = true;
        for(let i = 2; i <= Math.sqrt(value); i++)
        {
          if(value % i === 0)
          {
            isPrime = false;
            break;
          }
        }
        res = isPrime ? "It is a prime number" : "It is not a prime number";
      }
    }
    else if(param == "Perfect")
    {
      let sum = 0;
      for(let i = 1;i < value; i++)
      {
        if(value % i === 0)
        {
          sum = sum + i;
        }
      }
      res = sum === value ? "It is a Perfect number" : "It is not a Perfect number";
    }
    else if(param == "Even")
    {
      if(value % 2 == 0)
      {
        res = "It is an Even number"
      }
      else
      {
        res = "It is not an even number"
      }
    }
    else if(param == "Odd")
    {
      if(value % 2 != 0)
      {
        res = "It is an Odd number"
      }
      else
      {
        res = "It is not an Odd number"
      }
    }
    else
    {
      res = "Check your Parameter"
    }
    return res;
  }

}
