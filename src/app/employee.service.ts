import { Injectable } from '@angular/core';
import { Employee } from './employee';

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class EmployeeService{

  employees: Observable<Employee[]>;
  

  constructor( private http: HttpClient){
    
  }
  
  getEmployees(): Observable<Employee[]>{
     this.employees = this.http.get('https://httpemployee-bc50e.firebaseio.com/posts.json')
    //  .pipe(map(responseData => {
    //    const postsArray = []
    //  }))
    //  .subscribe(dataResponse => {
    //    console.log(dataResponse);
    //  })
      return this.employees;

    }

  addEmployees(emp: Employee){
    this.http.post('https://httpemployee-bc50e.firebaseio.com/posts.json', emp);
  }



    // addEmployees(emp: Employee){
    //   this.employeeCollection.add(emp);
    // }
}