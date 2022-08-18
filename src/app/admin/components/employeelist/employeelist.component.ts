import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/services/employees.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
employee:any;
addEmployeeForm:any;
value:any;
  constructor(private  router:Router,
    private employeeService:EmployeeService,
    private fb:FormBuilder) { 
      this.addEmployeeForm=this.fb.group({
        name:['']
      })
    }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employee = this.employeeService.getall();
    console.table(this.employee);
  }


  removeEmpty = (obj: any) => {
    Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
    return obj;
  };


  filterData() {
    let json = JSON.parse(JSON.stringify(this.employee))

    let selectData = this.removeEmpty(this.addEmployeeForm.value)

    if (selectData.name)
      json = json.filter((item: any) => item.name ? item.name.toLowerCase().includes(selectData.name.toLowerCase()) : true);
    // if (selectData.last_name)
    //   json = json.filter((item: any) => item.last_name ? item.last_name.toLowerCase().includes(selectData.last_name.toLowerCase()) : true);
    // if (selectData.designation)
    //   json = json.filter((item: any) => item.designation ? item.designation == (selectData.designation) : true);
    // if (selectData.department)
    //   json = json.filter((item: any) => item.department ? item.department == (selectData.department) : true);
    // if (selectData.phone_number)
    //   json = json.filter((item: any) => item.phone_number ? item.phone_number.includes(selectData.phone_number) : true);
    // if (selectData.company_email_address)
    //   json = json.filter((item: any) => item.company_email_address ? item.company_email_address.includes(selectData.company_email_address) : true);
    // if (selectData.joining_date)
    //   json = json.filter((item: any) => item.joining_date ? item.joining_date.includes(selectData.joining_date) : true);
    // if (selectData.employee_type)
    //   json = json.filter((item: any) => item.employee_type ? item.employee_type == (selectData.employee_type) : true);
    // if (selectData.technologies_used)
    //   json = json.filter((item: any) => item.technologies_used ? item.technologies_used == (selectData.technologies_used) : true);
    // if (selectData.status)
    //   json = json.filter((item: any) => item.status ? item.status == (selectData.status) : true);
    // if (selectData.passedout_year)
    //   json = json.filter((item: any) => item.passedout_year ? item.passedout_year == (selectData.passedout_year) : true);

    this.value = json
  }
}
