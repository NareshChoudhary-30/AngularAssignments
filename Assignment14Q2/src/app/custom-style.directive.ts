import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) 
  { 
    this.obj.nativeElement.style.backgroundColor = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
    this.obj.nativeElement.style.fontFamily = "Lucida Handwriting";
  }


}
