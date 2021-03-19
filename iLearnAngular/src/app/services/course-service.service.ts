import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpClient:HttpClient) { }

  //needs to be mapped to endpoint
  findAllCourseByUserId(id:number):Observable<Course[]>{
      return this.httpClient.get('http')as Observable<Course[]>;

  }

  findAllCourseByEmail(email:String):Observable<Course[]>{
    let params = new HttpParams()
        .set('email', email.valueOf())
    return this.httpClient.get('http://localhost:8080/iLearn/my-courses',{params:params})as Observable<Course[]>;

}


  addCourse(course:Course):Observable<Course>{
      return this.httpClient.post<Course>('http://localhost:8080/iLearn/addCourse',course)
  }

  deleteCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>('http://localhost:8080/iLearn/deleteCourse',course)
}
}
