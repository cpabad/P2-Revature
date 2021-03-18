import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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

  addCourse(course:Course):Observable<Course>{
      return this.httpClient.post<Course>('http://localhost:8080/iLearn/enrollCourse',course)
  }
}
