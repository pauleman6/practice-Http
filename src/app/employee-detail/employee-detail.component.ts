import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees: Employee[] = [];
  errorMsg;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    //this.employees = this.empService.getEmployees();
    this.empService.getEmployees()
    .pipe(map(responseData => {
       const postsArray: Employee[] = [];
       for(const key in responseData){
         postsArray.push(responseData[key]);
       }
       //this.employees = postsArray;
       return postsArray;
     }))
    .subscribe(data  => {this.employees = data}
    
    )
  }



}