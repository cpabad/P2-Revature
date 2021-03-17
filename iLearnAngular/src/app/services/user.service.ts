/**
 * 
 * @author kenny Huang
 *
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  register(user:User):Observable<User>{

    return this.httpClient.post<User>('http://localhost:8080/iLearn/addUser', user)

  }

  login(email:String, password: String):Observable<String> {
    
    return this.httpClient.post<String>('http://localhost:8080/iLearn/login',{email, password})

  }

}
