import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
  // styles: ['h1 { color:red; }']
  // encapsulation: ViewEncapsulation.Emulated
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://miro.medium.com/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg';
  flag: boolean = false;
  max_length = 50;
  user = { name: 'sanjay', address: 'bangalore' };
  num1: number = 10;
  num2: number = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }
  addResult: number = 0;
  addition(num3: any, num4: any) {
    this.addResult = num3 + num4;
  }
}
