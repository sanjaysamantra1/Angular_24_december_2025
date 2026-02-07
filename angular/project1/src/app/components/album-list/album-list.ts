import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-album-list',
  imports: [],
  templateUrl: './album-list.html',
  styleUrl: './album-list.css',
})
export class AlbumList {
  albumArr: any = signal([])
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/albums').subscribe((response: any) => {
      this.albumArr.set(response)
    })
  }
}
