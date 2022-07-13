import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<div>{{name}}</div>
  <h2>{{name.toUpperCase()}}</h2>
  <h1>{{name.length}}</h1>
  {{func()}}
  <h6>{{siteUrl}}</h6>`,
  styles: [`div{
    color:red
      }`]
})
export class InterpolationComponent implements OnInit {
  public name = "pavani";
public siteUrl=window.location.href
  constructor() { }

  ngOnInit(): void {
  }
  func(){
  return "hello " + this.name
  }

}
