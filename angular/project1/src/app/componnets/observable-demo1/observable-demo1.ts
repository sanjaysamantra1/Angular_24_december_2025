import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, filter, forkJoin, interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  httpClient = inject(HttpClient);

  // publisher
  num$ = interval(1000);
  even_num$ = this.num$.pipe(filter(val => val % 2 == 0));
  square_num$ = this.num$.pipe(map(val => val * val));

  time$ = this.num$.pipe(map(val => {
    return new Date().toLocaleTimeString();
  }));

  ngOnInit() {
    // this.num$.subscribe(val => console.log(val)); // subscriber
    // this.forkjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
  }
  forkjoin_demo() {
    let obsArr = [
      this.httpClient.get('https://jsonplaceholder.typicode.com/users'), // 1
      this.httpClient.get('https://jsonplaceholder.typicode.com/comments'), // 2
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos') // 2
    ]
    forkJoin(obsArr).subscribe(
      responseArr => {
        console.log(responseArr);
      },
      error => {
        console.log('Something went wrong', error);
      }
    );
  }

  mergeMap_demo() {
    const userId$ = of(1, 2, 3, 4, 5); // outer observable

    userId$.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
  concatMap_demo() {
    const userId$ = of(1, 2, 3, 4, 5); // outer observable
    userId$.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}
