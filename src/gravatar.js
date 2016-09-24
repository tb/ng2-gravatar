"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var md5 = require('md5');
var Gravatar = (function () {
    function Gravatar(elementRef) {
        this.elementRef = elementRef;
        this.size = 16;
        this.fallback = 'mm';
    }
    Gravatar.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.src = "//www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size + "&d=" + this.fallback;
    };
    __decorate([
        core_1.Input('email'), 
        __metadata('design:type', String)
    ], Gravatar.prototype, "email", void 0);
    __decorate([
        core_1.Input('size'), 
        __metadata('design:type', Number)
    ], Gravatar.prototype, "size", void 0);
    __decorate([
        core_1.Input('fallback'), 
        __metadata('design:type', String)
    ], Gravatar.prototype, "fallback", void 0);
    Gravatar = __decorate([
        core_1.Directive({
            selector: '[gravatar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Gravatar);
    return Gravatar;
}());
exports.Gravatar = Gravatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUt6QjtJQUtFLGtCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSDNCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQVcsSUFBSSxDQUFDO0lBRUUsQ0FBQztJQUU5QywyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLCtCQUE2QixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFNLElBQUksQ0FBQyxJQUFJLFdBQU0sSUFBSSxDQUFDLFFBQVUsQ0FBQztJQUN2SCxDQUFDO0lBUkQ7UUFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyQ0FBQTtJQUNmO1FBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7MENBQUE7SUFDZDtRQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7OzhDQUFBO0lBTnBCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7O2dCQUFBO0lBV0YsZUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksZ0JBQVEsV0FVcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5sZXQgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tncmF2YXRhcl0nXG59KVxuZXhwb3J0IGNsYXNzIEdyYXZhdGFyIHtcbiAgQElucHV0KCdlbWFpbCcpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlciA9IDE2O1xuICBASW5wdXQoJ2ZhbGxiYWNrJykgZmFsbGJhY2s6IHN0cmluZyA9ICdtbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IGAvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyR7bWQ1KHRoaXMuZW1haWwpfT9zPSR7dGhpcy5zaXplfSZkPSR7dGhpcy5mYWxsYmFja31gO1xuICB9XG59XG4iXX0=