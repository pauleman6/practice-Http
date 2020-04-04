import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class EmployeeService{

  employees: Observable<[Employee[]]>;
  employeeCollection: AngularFirestoreCollection;
  employeeDoc: AngularFirestoreDocument<Employee>;

  constructor(public afs: AngularFirestore){
    this.employees = afs.collection('employee').valueChanges();
  }
    getEmployees(): Employee[]{
        return[
            {"id":1, "name": "Andrew", "age": 30},
            {"id":2, "name": "Hana", "age": 21},
            {"id":3, "name": "John", "age": 40},
            {"id":4, "name": "Emily", "age": 33},
            {"id":5, "name": "Claire", "age": 25},
        ];

    }
}