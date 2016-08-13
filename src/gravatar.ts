import {Directive, ElementRef, Input} from '@angular/core';
let md5 = require('md5');

@Directive({
  selector: '[gravatar]'
})
export class Gravatar {
  @Input('email') email: string;
  @Input('size') size: number = 16;
  @Input('fallback') fallback: string = 'mm';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.src = `https://www.gravatar.com/avatar/${md5(this.email)}?s=${this.size}&d=${this.fallback}`;
  }
}
