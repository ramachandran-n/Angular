"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var interpolationexample = /** @class */ (function () {
    function interpolationexample() {
        this.firstName = "Ramachandran";
        this.lastName = "Narayanan";
        this.imagePath = "https://avatars1.githubusercontent.com/u/21025225?s=460&v=4";
    }
    interpolationexample.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    interpolationexample = __decorate([
        core_1.Component({
            selector: "interpolation",
            templateUrl: 'app/InterpolationExample/interpolationexample.component.html',
        })
    ], interpolationexample);
    return interpolationexample;
}());
exports.interpolationexample = interpolationexample;
//# sourceMappingURL=interpolationexample.component.js.map