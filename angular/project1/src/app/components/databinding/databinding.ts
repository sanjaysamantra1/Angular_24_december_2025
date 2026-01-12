import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://miro.medium.com/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg';
  flag: boolean = true;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
