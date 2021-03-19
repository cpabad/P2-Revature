import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpClient:HttpClient) { }


  findAllCourseByEmail(email:String):Observable<Course[]>{
    let params = new HttpParams()
        .set('email', email.valueOf())
    return this.httpClient.get('http://localhost:8080/iLearn/my-courses',{params:params})as Observable<Course[]>;

}


  addCourse(course:Course):Observable<Course>{
      return this.httpClient.post<Course>('http://localhost:8080/iLearn/addCourse',course)
  }

  findCourseById(id:String):Observable<Course>{
      let params = new HttpParams()
          .set('id',id.valueOf())
    return this.httpClient.get('http://localhost:8080/iLearn/courseid',{params:params}) as Observable<Course>;
}

  editCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>('http://localhost:8080/iLearn/updateCourse',course)
  }

  deleteCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>('http://localhost:8080/iLearn/deleteCourse',course)
}

}


