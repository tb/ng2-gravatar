import {Directive, ElementRef, Input} from '@angular/core';
import * as md5 from 'md5';

@Directive({
  selector: '[gravatar]'
})
export class GravatarDirective {
  @Input('email') email: string;
  @Input('size') size: number = 16;
  @Input('fallback') fallback: string = 'mm';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${md5(this.email)}?s=${this.size}&d=${this.fallback}`;
  }
}
