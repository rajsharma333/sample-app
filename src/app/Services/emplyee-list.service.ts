import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmplyeeListService {

  constructor(private http:HttpClient) { }
  employeeList:object = {}
  employeeDetail:Object = {}
  getEmployeeList = () => {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  addNewEmployee = (data) => {
    this.http.post('http://dummy.restapiexample.com/api/v1/create', data)
    .subscribe(data => {
      console.log(data);
    });
  }

  getEmployeeDetail = (id) => {
    return this.employeeDetail = this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map(res => {
        if(!res) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => of([]))
    );
  }

}
