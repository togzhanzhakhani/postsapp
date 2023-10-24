import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postId: number = 0;
  title: string = '';
  body: string = '';

  constructor(private postService: PostsService) {}

  onSubmit() {
    if (!this.postId) {
      console.error('Ошибка: Поле айдишки не может быть пустым.');
      return;
    }

    if (this.postService.getPostById(this.postId)) {
      console.error(`Ошибка: Пост с айдишкой ${this.postId} уже существует.`);
      return;
    }

    const post = { id: this.postId, title: this.title, body: this.body };
    this.postService.addPost(post);
    this.postId = 0;
    this.title = '';
    this.body = '';
  }
}
