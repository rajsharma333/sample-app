import { Component } from '@angular/core';
import { EmplyeeListService } from "./Services/emplyee-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private employees:EmplyeeListService) {}
  title:string = 'sample-app';
  viewEmployee:string = 'View Employee';
  isShowEmployeeList:boolean = false;
  employeeList:Object;

  viewEmployeeList = () => {
    this.isShowEmployeeList = !this.isShowEmployeeList;
    this.employees.getEmployeeList().subscribe((data) => {
      this.employeeList = data;
      console.log(this.employeeList);
    });
  }

}
