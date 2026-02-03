import { CommentService } from './../../services/comment-service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentService = inject(CommentService);
  commentArr: any = signal([]);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: any) => {
      this.commentArr.set(response);
    });
  }
}
