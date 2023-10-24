import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  getPostId(post: any): number {
    return post.id; 
  }
}