import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.component.html',
  styleUrls: ['./deviceslist.component.css']
})
export class DeviceslistComponent implements OnInit {
  devicesList: any;
  devicesEmployee: any;
  devicesData: any;
  constructor(private devices: DevicesService,
    private list: ListService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getEmployees();
    console.log('usercontact:init');
    // this.devicesData = this.devices.getall();
    console.log(this.devicesData);
  }


  getEmployees() {
    this.list.getEmployee().subscribe((data: any) => {
      console.log("employee", data)
      this.devicesEmployee = data
    })
  }

  getData() {
    this.list.getDevices().subscribe((res: any) => {
      console.log(res);
      this.devicesList = res
    })
  }
  employee() {
    // this.list.updateEmployee()
  }
  // assign(item: any) {
  //   console.log("devices", item);
  //   localStorage.setItem('devicesType', JSON.stringify(item));
  //   this.router.navigate(['/admin/employeelist/id'])
  // }

}
