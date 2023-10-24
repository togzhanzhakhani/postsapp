import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: { [key: number]: any } = {}; 
  //private postIdCounter = 1;

  constructor() {
    this.addPost({ id: 1, title: 'hello', body: 'hello world' });
    this.addPost({ id: 2, title: 'bye', body: 'bye world' });
  }

  addPost(post: any) {
    if (!post.id) {
      console.error('Ошибка: Айдишка не установлена.');
      return;
    }
  
    if (this.posts[post.id]) {
      console.error(`Ошибка: Пост с айдишкой ${post.id} уже существует.`);
      return;
    }
  
    this.posts[post.id] = { ...post, likes: 0, comments: [] };
    console.log('Пост добавлен:', this.posts[post.id]);
  }

  getPosts() {
    return Object.values(this.posts);
  }

  //getPostById(id: number) {
    //return this.posts[id];
  //}
  getPostById(id: number) {
    console.log('Попытка получения поста по ID:', id);
    const post = this.posts[id];
    console.log('Пост найден:', post);
    return post;
  }
  

  likePost(id: number) {
    if (this.posts[id]) {
      this.posts[id].likes++;
    }
  }

  addComment(id: number, comment: string) {
    if (this.posts[id]) {
      this.posts[id].comments.push(comment);
    }
  }


}

