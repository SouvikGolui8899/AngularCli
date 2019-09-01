import { Component } from '@angular/core';

// A component decorator is a function that attaches to the class right below it
@Component({
  selector: 'app-root', // a selector is basically a custom HTML tag that can be used to represent this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial4Component';
}
