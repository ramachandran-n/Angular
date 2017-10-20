import { Component } from '@angular/core'

@Component({
    selector: "interpolation",
    templateUrl: 'app/InterpolationExample/interpolationexample.component.html',
})

export class interpolationexample  {
    firstName: string = "Ramachandran";
    lastName: string = "Narayanan";
    imagePath: string = "https://avatars1.githubusercontent.com/u/21025225?s=460&v=4";
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}