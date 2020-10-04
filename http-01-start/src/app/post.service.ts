import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import{Post} from './post.model';
import { Subject,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  error= new Subject<string>();

  createAndStorePost(title:string,content:string){
    const postData :Post={title:title,content:content};
    this.http
    .post(
      'https://myangular-database.firebaseio.com/posts.json',
      postData
    )
    .subscribe(responseData => {
    //  console.log(responseData);
    }, error=>{
      this.error.next(error.message);
    });
}

  fetchPost(){
    return this.http
        .get<{[key:string]:Post}>('https://myangular-database.firebaseio.com/posts.json')
        .pipe(
          map(responseData=> { // helping in transforming data using observables
            const postsArray:Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                // getting array of objects
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          }),// it is useful to throw custom error 
            catchError(errorRes=>{
              // send error to analytics or log files
              return throwError(errorRes);
            })
        );
      }

      deletePost(){
       return this.http.delete('https://myangular-database.firebaseio.com/posts.json');
      }



  }

  


