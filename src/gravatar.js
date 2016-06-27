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
        this.elementRef.nativeElement.src = "http://www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size + "&d=" + this.fallback;
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
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Gravatar);
    return Gravatar;
    var _a;
}());
exports.Gravatar = Gravatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUt6QjtJQUtFLGtCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSDNCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQVcsSUFBSSxDQUFDO0lBRUUsQ0FBQztJQUU5QywyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLG9DQUFrQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFNLElBQUksQ0FBQyxJQUFJLFdBQU0sSUFBSSxDQUFDLFFBQVUsQ0FBQztJQUM1SCxDQUFDO0lBUkQ7UUFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyQ0FBQTtJQUNmO1FBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7MENBQUE7SUFDZDtRQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7OzhDQUFBO0lBTnBCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7O2dCQUFBO0lBV0YsZUFBQzs7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGdCQUFRLFdBVXBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xubGV0IG1kNSA9IHJlcXVpcmUoJ21kNScpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ3JhdmF0YXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBHcmF2YXRhciB7XG4gIEBJbnB1dCgnZW1haWwnKSBlbWFpbDogc3RyaW5nO1xuICBASW5wdXQoJ3NpemUnKSBzaXplOiBudW1iZXIgPSAxNjtcbiAgQElucHV0KCdmYWxsYmFjaycpIGZhbGxiYWNrOiBzdHJpbmcgPSAnbW0nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSBgaHR0cDovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyR7bWQ1KHRoaXMuZW1haWwpfT9zPSR7dGhpcy5zaXplfSZkPSR7dGhpcy5mYWxsYmFja31gO1xuICB9XG59XG4iXX0=