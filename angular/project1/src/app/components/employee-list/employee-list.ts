import { EmployeeService } from './../../services/employee-service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeArr:any = signal([]);
  employeeService = inject(EmployeeService)

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      this.employeeArr.set(response);
      console.log(response)
    })
  }
}
