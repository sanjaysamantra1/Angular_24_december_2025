import { Component, Directive, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding
    // Directives
    // MyModal
    // UserList
    // ProductList
    // PipeDemo
    ParentDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class Body {

}
