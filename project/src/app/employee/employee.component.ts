import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  show1 = false;
  display = false;
   hide = true;
  constructor() { }

  ngOnInit() {

  }

  get(item: any) {
    console.log(item)
    this.display = !this.display;
  }
  sh = true;
  show(item: any) {
    console.log(item)
    this.sh = !this.sh;
  }
  high() {
    console.log("hello");

    this.show1 = true;
  }

  getVal() {

  }

  groups = [{
    "id": 1,
    "name": "pencils",
    "items": "red pencil"
  },
  {
    "id": 2,
    "name": "rubbers",
    "items": "big rubber"
  },
  {
    "id": 3,
    "name": "rubbers1",
    "items": "big rubber1"
  }];
}
