import { HttpClient } from '@angular/common/http';
import { identifierName, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DevicesService } from '../../services/devices.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-assign-devices',
  templateUrl: './assign-devices.component.html',
  styleUrls: ['./assign-devices.component.css']
})
export class AssignDevicesComponent implements OnInit {
  data: any;
  button: any;
  employeeData: any;
  employees: any;
  listForm: any;
  dataLists: any;
  devicesList: any;
  devicesEmployee: any;
  devicesData: any;
  editData: any;
  name: any;
  employee: any;
  id: any;
  update: any;
  resposone: any;
  devise: any;
  dataSuccss: any;
  listdata: any;
  obj1: any;
  constructor(private devices: DevicesService,
    private list: ListService,
    private http: HttpClient,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.getData();
    this.getEmployees();
    this.list.get(this.activeRouter.snapshot.params['id']).subscribe((lists: any) => {
      this.employeeData = lists;
      console.log(this.employeeData);

    })

    // this.listdata = this.activeRouter.snapshot.params['id'];
    //  console.log(this.listdata);

  }


  getEmployees() {
    this.list.getEmployee().subscribe((data: any) => {
      // console.log("employee", data)
      this.devicesEmployee = data
    })
  }

  getData() {
    this.list.getDevices().subscribe((res: any) => {
      // console.log(res);
      this.devicesList = res
    })
  }
  edit(devices: any) {
    console.log(devices);


    console.log("devicess", devices);


    // console.log("hello", this.listdata);
    // devices['employee'] = this.employeeData
    // console.log("de",devices['employee']);
    devices.employee=this.employeeData
    

    // console.log(devices.employee);
    console.log(devices)
    // this.list.updateDevices(devices.id, lastObj);
    this.http.put(environment.base_url + '/devices/' + devices.id,devices.employee
    ).subscribe((updated: any) => {
      console.log("updated", updated, devices);
      console.log(this.employeeData)

    })
    console.log("devices", devices)
    // this.listdata = item.id;
    // this.dataSuccss = this.listdata;
    // // this.devise = this.employees.id;
    // console.log( "this.dataSuccss",  this.dataSuccss);

    // debugger

    // this.list.updateDevices(this.dataSuccss, item).subscribe((rest: any) => {
    //        this.obj1['employee'] = rest.id;
    // })

  }


}
