import { Component } from '@angular/core'

@Component({
    selector: "propertybinding",
    templateUrl: 'app/PropertyBinding/propertybindingexample.component.html',
})

export class propertybindingexample  {
    isDisabled: boolean = false;
    maliciousHTML: string = "Hello <script> alert('I see you!!')</script>";
    
}
