import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Post} from './post.model';
import {PostService} from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post [] =[];
  fetchingPost=false;
  error =null;
  private errorSub:Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
   // handling error createPost request
      this.errorSub= this.postsService.error.subscribe(errorMessage=>{
      this.error= errorMessage;
    });

    this.fetchingPost=true;
    this.postsService.fetchPost().subscribe(posts=>{
    this.fetchingPost=false;
    this.loadedPosts=posts;
    },// handling error fetchPost request
    error=>{
      this.fetchingPost=false;
      this.error= error.message;
    });

  }
  onHandleError(){
    this.error=null;
   // this.fetchingPost=false;
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
  this.postsService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchingPost=true;
    this.postsService.fetchPost().subscribe(posts=>{
     this.fetchingPost=false;
      this.loadedPosts=posts;
    }, 
    error=>{
      this.fetchingPost=false;
      this.error= error.message;
      
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePost().subscribe(()=>{
      this.loadedPosts=[];
    });
  }

 ngOnDestroy(){
   this.errorSub.unsubscribe();
 }
}
