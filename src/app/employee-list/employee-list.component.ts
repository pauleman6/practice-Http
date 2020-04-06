import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  errorMsg;
  newEmployee: Employee;
  eName: string;
  count: number = 1;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
   // this.employees = this.empService.getEmployees();
   // this.employees = this.empService.getEmployees();
  //  console.log("this is the employees array" + this.employees);
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

  onKey(n: string){
    this.eName = n;

  }

  addNewEmployee(){
    this.newEmployee = {name: this.eName, id: this.count++, age: 20};
        console.log(this.newEmployee);
        this.empService.addEmployees(this.newEmployee);
  }



  


}