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
  getCourse:Course = new Course(0,"",new User(12,"","","","",this.course),"",new Date(),true,0,0);
  email:String = sessionStorage.getItem('email');
  id:String ="";

  myCourses:Course[]

  ngOnInit(): void {
   this.findAllCourseByEmail(this.email);
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

  findCourseById(){
    this.courseService.findCourseById(this.id).subscribe(
      (data)=>{
        this.getCourse = data;
        console.log(data)
      },
      () =>{
        console.log("error in course component")
      }
    )
  }

  editCourse(){
    this.courseService.editCourse(this.getCourse).subscribe(
      (data)=>{
        console.log(data)
      },
      () =>{
        console.log("error in course component")
      }
    )
  }

  deleteCourse(){
    this.courseService.deleteCourse(this.getCourse).subscribe(
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
