import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
