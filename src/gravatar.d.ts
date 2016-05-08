import { ElementRef } from '@angular/core';
export declare class Gravatar {
    private elementRef;
    email: string;
    size: number;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
