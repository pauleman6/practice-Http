import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, AfterViewChecked {

  employees: Employee[] = [];
  errorMsg;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    //this.employees = this.empService.getEmployees();
    this.empService.getEmployees()
     .subscribe(data  => {this.employees = data}
    
    )
  }

  ngAfterViewChecked(){
     this.empService.getEmployees()
     .subscribe(data  => {this.employees = data}
    
    )
  }



}