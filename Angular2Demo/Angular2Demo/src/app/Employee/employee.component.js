"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.firstName = "Ramachandran";
        this.lastName = "Narayanan";
        this.age = 27;
        this.gender = "male";
        this.salary = 1000;
    }
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: "employee",
            templateUrl: 'app/Employee/employee.component.html',
            //styles: ['table { border: double solid; font-style:oblique; font-size:larger; font-family: Arial, Haettenschweiler, sans-serif; border-collapse : collapse;}', 'td{ border: 2px solid red; }']
            styleUrls: ['app/Employee/employee.component.css']
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map