import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceappComponent } from './serviceapp/serviceapp.component';

const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'department/:id',
    component: DepartmentDetailsComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'serviceApp',
    component: ServiceappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DepartmentComponent, EmployeeComponent, PageNotFoundComponent, DepartmentDetailsComponent]