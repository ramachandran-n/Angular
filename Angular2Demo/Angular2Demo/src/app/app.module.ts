import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Importing the new EmployeeComponent
import { EmployeeComponent } from './Employee/employee.component'

//Added new component to the module EmployeeComponent
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
