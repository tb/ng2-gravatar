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
    }
    Gravatar.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.src = "http://www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size;
    };
    __decorate([
        core_1.Input('email'), 
        __metadata('design:type', String)
    ], Gravatar.prototype, "email", void 0);
    __decorate([
        core_1.Input('size'), 
        __metadata('design:type', Number)
    ], Gravatar.prototype, "size", void 0);
    Gravatar = __decorate([
        core_1.Directive({
            selector: '[gravatar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Gravatar);
    return Gravatar;
}());
exports.Gravatar = Gravatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUt6QjtJQUlFLGtCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRjNCLFNBQUksR0FBVyxFQUFFLENBQUM7SUFFWSxDQUFDO0lBRTlDLDJCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsb0NBQWtDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQU0sSUFBSSxDQUFDLElBQU0sQ0FBQztJQUN6RyxDQUFDO0lBUEQ7UUFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyQ0FBQTtJQUNmO1FBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7MENBQUE7SUFMaEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQzs7Z0JBQUE7SUFVRixlQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxnQkFBUSxXQVNwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBtZDUgPSByZXF1aXJlKCdtZDUnKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dyYXZhdGFyXSdcbn0pXG5leHBvcnQgY2xhc3MgR3JhdmF0YXIge1xuICBASW5wdXQoJ2VtYWlsJykgZW1haWw6IHN0cmluZztcbiAgQElucHV0KCdzaXplJykgc2l6ZTogbnVtYmVyID0gMTY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IGBodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHttZDUodGhpcy5lbWFpbCl9P3M9JHt0aGlzLnNpemV9YDtcbiAgfVxufVxuIl19