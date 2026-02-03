import { Component, Directive, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding
    // Directives
    // MyModal
    // UserList
    // ProductList
    // PipeDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // HttpDemo1
    // CommentList
    EmployeeList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class Body {
  flag = true;
}
