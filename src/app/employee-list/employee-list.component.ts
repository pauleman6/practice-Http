import { Component, OnInit, OnChanges,AfterViewChecked } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewChecked {

  employees: Employee[] = [];
  newEmployee: Employee;
  eName: string;
  eAge: number;
  count: number = 1;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
      this.empService.getEmployees()
      .subscribe(data  => {
        this.employees = data
     }
    )
    
  }

  ngAfterViewChecked(){
    this.empService.getEmployees()
      .subscribe(data  => {
        this.employees = data 
     }
    )
  }

  onKey(n: string){
    this.eName = n;

  }

  addNewEmployee(){
    this.newEmployee = {name: this.eName, id: this.count++, age: this.eAge};
        console.log(this.newEmployee);
        this.empService.addEmployees(this.newEmployee);
  }s



  


}