import {Component} from '@angular/core'


@Component({
    selector: "employee",
    templateUrl: 'app/Employee/employee.component.html',
    //styles: ['table { border: double solid; font-style:oblique; font-size:larger; font-family: Arial, Haettenschweiler, sans-serif; border-collapse : collapse;}', 'td{ border: 2px solid red; }']
    styleUrls : ['app/Employee/employee.component.css']
})

export class EmployeeComponent {
    firstName: string = "Ramachandran";
    lastName: string = "Narayanan";
    age: number = 27;
    gender: string = "male";
    salary: number = 1000; 
}