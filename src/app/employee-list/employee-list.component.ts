import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

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
    this.empService.getEmployees()
    .subscribe(data => {this.employees = data
      console.log(data)
    })
  }

  onKey(n: string){
    this.eName = n;

  }

  addNewEmployee(){
    this.newEmployee = {name: this.eName, id: this.count++, age: 20};
        console.log(this.newEmployee);
  }



  


}