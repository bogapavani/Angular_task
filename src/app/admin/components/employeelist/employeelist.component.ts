import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
// import { EmployeeService } from 'src/app/admin/services/employees.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee: any;
  addEmployee: any;
  value: any;
  devicesData: any;
  employeesData: any;
  editData: any;
  devicesTypes: any;
  constructor(private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private list: ListService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.employeeData();
  }

  employeeData() {
    this.list.getEmployee().subscribe((res: any) => {
      console.log(res);
      this.employee = res;

    })
  }

  filterData() {

  }

  devices(item: any) {
    console.log(item);
  }


}
