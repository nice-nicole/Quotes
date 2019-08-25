import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightgreen"
   }

  // private textDeco(action:string){
  //   this.elem.nativeElement.style.textDecoration=action;

  // }
}
