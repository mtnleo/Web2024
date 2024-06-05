import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalizeAll]'
})
export class CapitalizeAllDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'capitalize';
    this.element.nativeElement.style.color = 'red';
  }

}
