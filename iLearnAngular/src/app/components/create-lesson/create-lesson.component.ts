import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createLessonDiv:boolean = true; //Change to false so I can hover over a course and add it

}
