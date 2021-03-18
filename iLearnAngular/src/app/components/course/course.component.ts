import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Course } from 'src/app/models/course'
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseServiceService) { }

  course:Course[] = [];
  newCourse:Course = new Course(0,"",new User(12,"","","","",this.course),"",new Date(),true,0,0);
  email:String = sessionStorage.getItem('email');

  index:number = 0;
  myCourses:Course[]

  ngOnInit(): void {
   this.findAllCourseByEmail(this.email);
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
  findAllCourseByEmail(email:String){
    this.courseService.findAllCourseByEmail(email).subscribe(
    (data)=>{
        this.myCourses = data;
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
