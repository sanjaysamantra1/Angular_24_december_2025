import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://miro.medium.com/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg';
  flag: boolean = false;
  max_length = 50;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
