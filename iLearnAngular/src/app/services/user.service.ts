/**
 * 
 * @author kenny Huang
 *
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  user:User;

  authenticate(email:String,password:String):Observable<User>{

    let params =  new HttpParams()
          .set('email', email.valueOf())
          .set('password', password.valueOf());
    return this.httpClient.get<User>('http://localhost:8080/iLearn/validateLogin',{params:params}) as Observable<User>
       
  }


  isLoggedIn(){
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('username')
  }

  register(user:User):Observable<User>{

    return this.httpClient.post<User>('http://localhost:8080/iLearn/addUser', user)

  }

  login(email:String, password: String):Observable<String> {
    
    return this.httpClient.post<String>('http://localhost:8080/iLearn/login?email=' + email + '&password=' + password, null)

  }

}
