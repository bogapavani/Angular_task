import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//routing module
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';

// modules
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //routing module
    AppRoutingModule,
    //user defined moduless
    AdminRoutingModule,
    AuthRoutingModule,
    EmployeeRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
