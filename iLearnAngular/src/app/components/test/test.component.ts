import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private courseService:CourseServiceService, private userService:UserService) { }

  course:Course[] = [];
  email:String = sessionStorage.getItem('email');
  user:User = new User(0,"","","","",[]);
  visibility:boolean = true;

  newCourse:Course = new Course(0,"",this.user,"",new Date(),true,'',0);
  getCourse:Course = new Course(0,"",this.user,"",new Date(),true,'',0);
  emptyCourse:Course = new Course(0,"",this.user,"",new Date(),true,'',0);

  myCourses:Course[]

  ngOnInit(): void {
   this.findAllCourseByEmail(this.email);
   this.getloggedInUser(this.email);
   
  }

  getloggedInUser(email:String){
    this.userService.getUser(email).subscribe(
      (data)=>{
        this.user = data;
      },() => {
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
    this.newCourse.creator=this.user;
    this.courseService.addCourse(this.newCourse).subscribe(
      (data)=>{
        console.log(data+"course");
        window.location.reload();
      },
      () =>{
        console.log("error in course component")
        window.location.reload();
      }
    )
  }

  findCourseById(id:number){
    console.log("This is inside of finde course " + id)
    this.getCourse.courseid = id
    this.courseService.findCourseById(id.toString()).subscribe(
      (data)=>{
        this.getCourse = data;
      },
      () =>{
        console.log("error in course component")
      }
    )
  }

  editCourse(id:number){
    this.findCourseById(id)
    console.log(this.getCourse)
    this.courseService.editCourse(this.getCourse).subscribe(
      (data)=>{
        this.getCourse = data
        console.log(data)
        window.location.reload();
      },
      () =>{
        console.log("error in course component")
        window.location.reload();
      }
    )
  }

  deleteCourse(id:number){
    console.log(id + "this is my courseid")
    this.findCourseById(id)
    this.courseService.deleteCourse(this.getCourse).subscribe(
      (data)=>{
        console.log(data);
        window.location.reload();
      },
      () =>{
        console.log("error in course component")
        window.location.reload();
      }
    )
  }

  

  changeCourseVisibility(){
    this.visibility = !this.visibility
  }
  changeEditCourseVisibility(id:String){
   var courseid:number = +id;
    this.findCourseById(courseid)
    var myid:string = "editForm" +id
    var doc = document.getElementById(myid);
    if (doc.style.display==='none'){
      doc.style.display='block';
    } else{
      doc.style.display='none';
    }
  }
}