import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
        Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <!-- assignments cannot be used within interpolation -->
    <!-- <h2>{{a = 2+2}}</h2> -->
    <!-- Also global variables like window, screen cannot be accessed within interpolation -->
    <!-- However, we can access the global variables through a property of the class -->
    <h2>{{siteUrl}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = `Souvik`;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  public greetUser() {
    return 'Hello ' + this.name;
  }

}
