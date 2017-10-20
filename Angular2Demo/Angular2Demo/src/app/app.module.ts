import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Importing the new EmployeeComponent
import { EmployeeComponent } from './Employee/employee.component';
import { interpolationexample } from './InterpolationExample/interpolationexample.component';
import { propertybindingexample } from './PropertyBinding/propertybindingexample.component';

//Added new component to the module EmployeeComponent, Interpolation component and Property Binding component
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent, interpolationexample, propertybindingexample],
    bootstrap: [AppComponent]
})
export class AppModule { }
