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

    this.employees = this.http.get<Employee[]>('https://httpemployee-bc50e.firebaseio.com/posts.json');

    //  this.http.get<Employee>('https://httpemployee-bc50e.firebaseio.com/posts.json')
    //  .pipe(map(responseData => {
    //    const postsArray: Employee[] = [];
    //    for(const key in responseData){
    //      postsArray.push(responseData[key]);
    //    }
    //    this.employees = postsArray;
    //    return postsArray;
    //  }))
    //  .subscribe(posts => {
    //    console.log(posts);
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