import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as md5 from 'md5';

@Directive({
  selector: '[gravatar]'
})
export class GravatarDirective implements OnChanges{
  @Input('email') email: string;
  @Input('size') size: number = 16;
  @Input('fallback') fallback: string = 'mm';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.setUrlGravatar(this.email);
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['email']) {
      this.setUrlGravatar(changes['email'].currentValue);
    }
  }

  setUrlGravatar(email: string){
    this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${md5(email)}?s=${this.size}&d=${this.fallback}`;
  }
}
