import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AssignDevicesComponent } from './components/assign-devices/assign-devices.component';
import { AssignEmployeesComponent } from './components/assign-employees/assign-employees.component';
import { DevicedetailsComponent } from './components/devicedetails/devicedetails.component';
import { DeviceslistComponent } from './components/deviceslist/deviceslist.component';
import { EditDevicesComponent } from './components/edit-devices/edit-devices.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
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
  },
  {
    path: 'employeelist/:id',
    component: EmployeelistComponent
  },
  {
    path:'assign-employee/:id',
    component:AssignEmployeesComponent
  },
  {
    path:'assign-devices/:id',
    component:AssignDevicesComponent
  },
  {
    path: 'edit-employee/:id',
    component: EditEmployeesComponent,
  },
  {
    path: 'devices-edit/:id',
    component: EditDevicesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
