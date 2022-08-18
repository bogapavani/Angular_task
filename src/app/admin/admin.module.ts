import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// routing module
import { AdminRoutingModule } from './admin-routing.module';
// components
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeviceslistComponent } from './components/deviceslist/deviceslist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { DevicedetailsComponent } from './components/devicedetails/devicedetails.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { HelloComponent } from './components/hello.component';
import { SidebarDirective } from './components/sidenav.directive';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

@NgModule({
  declarations: [

    AddDevicesComponent,
    AddEmployeeComponent,
    DeviceslistComponent,
    EmployeelistComponent,
    DevicedetailsComponent,
    SidenavbarComponent,
    HelloComponent,
    SidebarDirective,
    AdminhomeComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // routingmodule
    AdminRoutingModule,

  ]
})
export class AdminModule { }
