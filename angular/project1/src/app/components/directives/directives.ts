
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}
@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  carArr: string[] = ['Tata', 'Honda', 'Maruti', 'Toyota'];
  employees: Employee[] = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]
  myStyle1 = {
    color: 'red',
    border: '5px dotted green',
    padding: '10px'
  }
  myStyle2 = {
    color: 'blue',
    border: '5px dotted purple',
    padding: '5px'
  }
  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }

  empArr = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" }
  ]
  updateEmpArr() {
    this.empArr = [
      { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
      { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
      { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
      { "eId": 102, "name": "sita", "sal": 9500, "gender": "female" },
    ]
  }

  trackByItemId(emp:any){
    return emp.eId;
  }
}
