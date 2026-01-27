import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  // trying to create an instance of ElementRef class inside Highlight class
  // ele = new ElementRef();
  constructor(private ele: ElementRef) {  // Dependency Injection
    console.log(ele)
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.color = '';
    this.ele.nativeElement.style.backgroundColor = '';
  }

}
