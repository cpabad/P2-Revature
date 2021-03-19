import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient:HttpClient) { }

  lesson:Lesson;

  viewLessonsByCourse(course:Course):Observable<Lesson[]>{
    return this.httpClient.post<Lesson[]>('http://localhost:8080/lesson/view-lesson-by-course', course)
  }

  createLesson(lesson:Lesson):Observable<Lesson>{
    return this.httpClient.post<Lesson>('http://localhost:8080/lesson/new', lesson)
  }

  deleteLesson(lesson:Lesson):Observable<Lesson>{
    return this.httpClient.post<Lesson>('http://localhost:8080/lesson/delete', lesson)
  }

  updateLesson(lesson:Lesson):Observable<Lesson>{
    return this.httpClient.post<Lesson>('http://localhost:8080/lesson/update', lesson)
  }
}
