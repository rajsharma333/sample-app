import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatAutocomplete } from "@angular/material/autocomplete";

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // MatFormFieldModule,
    // MatAutocomplete
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
