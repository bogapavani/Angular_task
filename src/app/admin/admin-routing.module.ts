import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { DevicedetailsComponent } from './components/devicedetails/devicedetails.component';
import { DeviceslistComponent } from './components/deviceslist/deviceslist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

const routes: Routes = [
  {
    path: 'adminhome',
    component: AdminhomeComponent
  },
  {
    path: 'add-devices',
    component: AddDevicesComponent
  },
  {
    path: 'deviceslist',
    component: DeviceslistComponent
  },
  {
    path: 'devicedetails',
    component: DevicedetailsComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'employeelist',
    component: EmployeelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
