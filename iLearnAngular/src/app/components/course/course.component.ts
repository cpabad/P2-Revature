import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Course } from 'src/app/models/course'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseServiceService) { }

  course:Course[] = [];
  newCourse:Course = new Course(0,"",null,"",new Date(),true,0,0);

  ngOnInit(): void {
   // this.findAllCourseByUserId();
  }


  findAllCourseByUserId(id:number){
      this.courseService.findAllCourseByUserId(id).subscribe(
      (data)=>{
          this.course = data;
      },
      () =>{
        console.log("Something went wrong");
      }
    )
  }

  addCourse(){
    this.courseService.addCourse(this.newCourse).subscribe(
      (data)=>{
        console.log(data)
      },
      () =>{
        console.log("error in course component")
      }
    )
  }

  changeVisibility(){
    var doc = document.getElementById("courseSubmit");
    if (doc.style.visibility==='hidden'){
      doc.style.visibility='visible';
    } else{
      doc.style.visibility='hidden';
    }
  }
}
