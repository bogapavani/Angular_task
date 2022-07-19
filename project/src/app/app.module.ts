import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AppservieService } from './appservie.service';
import {HttpClientModule} from '@angular/common/http';
import { OutputComponent } from './output/output.component';
import { UserPipe } from './pipes/user.pipe';
import { ServiceappComponent } from './serviceapp/serviceapp.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { DepartmentComponent } from './department/department.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    PipesComponent,
    routingcomponents,
    OutputComponent,
    UserPipe,
    ServiceappComponent,
    // DepartmentDetailsComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [AppservieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
