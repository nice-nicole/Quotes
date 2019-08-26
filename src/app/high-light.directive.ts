import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightgreen"
   }
}
