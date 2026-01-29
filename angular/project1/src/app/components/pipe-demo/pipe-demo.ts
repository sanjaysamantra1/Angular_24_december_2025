import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    MySortPipe
  ],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName: string = 'saCHin teNDulKaR';
  mySal: number = 5000;
  dateObj = new Date();
  user = { id: 101, name: 'Sanjay', role: 'Trainer', salary: 5000 }
  cars = ['Tata', 'Honda', 'Maruti', 'Toyota', 'Hyundai'];
  num = interval(1000);

  cardinal: number = 21;
  numArr = [20, 50, 10, 40, 30];
}
