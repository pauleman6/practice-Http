import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class EmployeeService{

  employees: Observable<Employee[]>;
  employeeCollection: AngularFirestoreCollection;
  employeeDoc: AngularFirestoreDocument<Employee>;

  constructor(public afs: AngularFirestore){
    this.employees = afs.collection('employee').valueChanges();
    this.employeeCollection = this.afs.collection('employees');
  }
  
  getEmployees(): Observable<Employee[]>{
      return this.employees;

    }

    // addEmployees(emp: Employee){
    //   this.employeeCollection.add(emp);
    // }
}