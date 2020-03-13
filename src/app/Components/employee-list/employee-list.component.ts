import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  @Input() employeeList;
  buttonText:string = "Add New Employee";
  isShowList:boolean = true;
  updateEmployeeID:number;

  ngOnInit() {
  }

  addEmployee = () => {
    this.updateEmployeeID = 0;  
    this.isShowList = !this.isShowList;
    this.buttonText = this.isShowList ? "Add New Employee" : "View Employee List";
  }

  updateEmployee = (employeeId) => { 
    this.updateEmployeeID = employeeId;   
    this.isShowList = !this.isShowList;
    this.buttonText = this.isShowList ? "Update Employee" : "View Employee List";
  }
}
