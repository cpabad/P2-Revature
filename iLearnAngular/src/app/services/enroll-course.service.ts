import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class EnrollCourseService {

  constructor(private httpClient:HttpClient) { }

  enrollCourse(userid:String,courseid:String):Observable<Course>{
    let params = new HttpParams()
        .set('userid',userid.valueOf())
        .set('courseid', courseid.valueOf());
    return this.httpClient.post<Course>('http://localhost:8080/iLearn/enrollCourse',{params:params}) as Observable<Course>
  }
}
