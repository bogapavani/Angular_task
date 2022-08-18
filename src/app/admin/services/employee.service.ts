import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeData: Employee[] = [{
    id: 1,
    name: "prahasith",
    email: "prahasith@gmail.com",
    phoneNumber: 8106985212,
    designation: "Administrative Director",
    empId: "PRA123428",
    role: "admin",
    devices: "Laptop",
  },
  {
    id: 2,
    name: "NuthanKumar",
    email: "nuthanKumar@gmail.com",
    phoneNumber: 8106456212,
    designation: "Administrative Director",
    empId: "PRA123428",
    role: "employee",
    devices: "MAC"
  },
  {
    id: 3,
    name: "Pavan Kalyan",
    email: "pavan@gmail.com",
    phoneNumber: 8108525212,
    designation: "Administrative Director",
    empId: "PRA123428",
    role: "employee",
    devices: "Windows"
  }];

  create(devicecontact: Employee) {
    const itemIndex = this.employeeData.length;
    devicecontact.id = this.getnextId();
    console.log("hello", devicecontact);
    this.employeeData[itemIndex] = devicecontact;
  }

  delete(devicecontact: Employee) {
    this.employeeData.splice(this.employeeData.indexOf(devicecontact), 1);
  }

  update(devicecontact: Employee) {
    const itemIndex = this.employeeData.findIndex(item => item.id === devicecontact.id);
    console.log(itemIndex);
    this.employeeData[itemIndex] = devicecontact;
  }

  getall(): Employee[] {
    console.log('employeeDataervice:getall');
    console.log(this.employeeData);
    return this.employeeData;
  }



  getnextId(): number {
    let highest = 0;
    this.employeeData.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}

