import { Component } from '@angular/core'

@Component({
    selector: "interpolation",
    templateUrl: 'app/InterpolationExample/interpolationexample.component.html',
})

export class interpolationexample  {
    firstName: string = "Ramachandran";
    lastName: string = "Narayanan";
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }+
}