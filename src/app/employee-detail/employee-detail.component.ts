import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

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
    this.employees = this.empService.getEmployees();
  }



}