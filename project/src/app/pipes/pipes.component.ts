import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<h1>{{name | lowercase}}</h1>
  <h1>{{name|uppercase}}</h1>
  <h4>{{jsons |json}}</h4>
  <h1>{{name | slice:1:6}}</h1>
  <h2>{{5.678|number:'1.2-3'}}</h2>
  <h2>{{0.25| percent}}</h2>
  <h2>{{0.25|currency}}</h2>
  <h2>{{0.25|currency:'GBP'}}</h2>
  <h2>{{0.25|currency:'GBP':'code'}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date |date:'short'}}</h2>
  <h2>{{date |date:'shortDate'}}</h2>
  <h2>{{date |date:'shortTime'}}</h2>`,
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public name = "pipes";
  public date=new Date();
  public jsons = {
    "firstname": "boga",
    "lastname": "pavani"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
