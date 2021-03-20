import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {}

  makeComment(comment:Comment):Observable<Comment>{

    return this.httpClient.post<Comment>('http://localhost:8080/comment/new', comment)

  }

}
