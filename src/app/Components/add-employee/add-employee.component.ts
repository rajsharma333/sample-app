import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { EmplyeeListService } from "../../Services/emplyee-list.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder, private employeeService:EmplyeeListService) { }

  employeeForm:FormGroup;

  @Input() employeeID;
  id:number;
  get f(){return this.employeeForm.controls};

  
  submitForm = () => {
    let newEmployeeData = {
      "name" : this.f.name.value,
      "salary": this.f.salary.value,
      "age": this.f.age.value
    };
    this.employeeService.addNewEmployee(newEmployeeData);
  }

  getEmployeeDetail = ():void => {
    let employeeDetail;
    // this.employeeService.getEmployeeDetail(this.employeeID).subscribe((data) => {
    //   this.employeeDetail = data;
    // });

    this.employeeService.getEmployeeList().subscribe(data => {
      employeeDetail = data;
      if (this.employeeID > 0 ){
        employeeDetail = employeeDetail.data.filter(x => x.id == this.employeeID);      
        this.employeeForm = this.fb.group({
          name: [employeeDetail[0].employee_name],
          salary: [employeeDetail[0].employee_salary],
          age: [employeeDetail[0].employee_age]
        });
      }
      else {
        this.employeeForm = this.fb.group({
          name: [''],
          salary: [''],
          age: ['']
        });
      }
    });
  }

  ngOnInit() {
    let employee = this.getEmployeeDetail();
  }

}

