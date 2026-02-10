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
import { ObservableDemo1 } from '../../componnets/observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../../componnets/observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { AlbumList } from '../album-list/album-list';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives
    // MyModal
    // UserList
    // ProductList
    // PipeDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // HttpDemo1
    // CommentList,
    // AlbumList,
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    // SubjectDemo1
    // SignalDemo1
    // FormDemo1
    // ModelDrivenForm
    // DynamicForm
    RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class Body {
  flag = true;
}
