import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';
import { User } from 'src/app/models/user';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

  constructor(private lessonService:LessonService) { }

  ngOnInit(): void {
    this.viewLessonsByCourse()
  }
  lessons:Lesson[];
  creator:User = new User(0, '', '', '', '', []);
  courseWithNewLesson:Course = new Course(0, '', this.creator, '', new Date(), 0);
  newLesson: Lesson = new Lesson(0, '', this.courseWithNewLesson, "");
  createLessonDiv:boolean = true; //Change to false so I can hover over a course and add it

  createLesson(){
    this.lessonService.createLesson(this.newLesson).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
        console.log('Something went wrong!')
      }
    )
  }

  viewLessonsByCourse(){
    this.lessonService.viewLessonsByCourse(this.courseWithNewLesson).subscribe(
      data => {
        this.lessons = data
        console.log(this.lessons)
      },
      () => {
        console.log('Something went wrong!')
      }
    )
  }
}
