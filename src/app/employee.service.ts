import { Injectable, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { Employee } from './employee';
import {Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  employees: Observable<Employee[]>;
  
  constructor( private http: HttpClient){
  }

 
  getEmployees(): Observable<Employee[]>{
    this.employees =  this.http.get<Employee[]>('https://httpemployee-bc50e.firebaseio.com/posts.json')  
        .pipe(
          map(responseData => {
          const postsArray: Employee[] = [];
          for(const key in responseData){
            postsArray.push(responseData[key]);
          }
          return postsArray;
        })
        );
     return this.employees;
    }

  addEmployees(emp: Employee){
    this.http.post('https://httpemployee-bc50e.firebaseio.com/posts.json', emp)
    .subscribe(data => {
      console.log(data);
    })
  }

  }
