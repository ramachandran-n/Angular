import { Component } from '@angular/core';

//Added <employee> for nesting component example
//Added <interpolaton> for interpolation example
@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{ pageHeader }}</h1>
            <interpolation></interpolation>
            <employee></employee>
        </div>`,
})
export class AppComponent {
    pageHeader: string = "Employee Details";
}
