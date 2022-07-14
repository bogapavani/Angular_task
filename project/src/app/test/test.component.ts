import { Component, OnInit } from '@angular/core';
import { AppservieService } from '../appservie.service';

@Component({
  selector: '[app-test]',
  template: `<div>Test Works!</div>
  {{errorMsg}}
  <h4 *ngFor="let employees of employee">{{employees.name}}</h4>
  <h4 *ngFor="let employees of employee">{{employees.id}}--{{employees.name}}--{{employees.age}}</h4>`,

  styles: [`div{
color:orange
  }`]
})
export class TestComponent implements OnInit {
  employee: any;
  errorMsg:any;
  constructor(private _employee: AppservieService) { }

  ngOnInit(): void {
    this._employee.getEmployee().subscribe(data=>{
      this.employee =data,
        (error: any)=>this.errorMsg=error;
      console.log(this.employee)
    });
  }

}
