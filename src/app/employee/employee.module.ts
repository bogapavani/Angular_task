import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//routingmodule
import { EmployeeRoutingModule } from './employee-routing.module';
// component
import { EmployeedetailsComponent } from './component/employeedetails/employeedetails.component';



@NgModule({
  declarations: [
    EmployeedetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //routingmodule
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule { }
