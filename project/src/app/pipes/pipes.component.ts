import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<h1>{{name | lowercase}}</h1>
    <h2>{{0.25|currency}}</h2>`,
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public name = "pipes";
  public date = new Date();
  public jsons = {
    "firstname": "boga",
    "lastname": "pavani"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
