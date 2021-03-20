import { Component, OnInit } from '@angular/core';
import { EnrollCourseService } from 'src/app/services/enroll-course.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit {

  constructor(private enrollService:EnrollCourseService, private userService:UserService) { }

  email:String = sessionStorage.getItem('email'); 
  user:User = new User(0,"","","","",[]);
  userid:String = "";
  courseid:String="";

  ngOnInit(): void {
    this.getloggedInUser(this.email);
  }

  getloggedInUser(email:String){
    this.userService.getUser(email).subscribe(
      (data)=>{
        this.user = data;
        this.userid =this.user.userid.toString();
        console.log(this.user);
        console.log(this.userid+ "is string");
      },() => {
              console.log("Something went wrong");
        }
    )
  }

  enrollCourse(){
    console.log(this.userid +" enroll id");
    console.log(this.courseid + " enroll coureseid");
    this.enrollService.enrollCourse(this.userid,this.courseid).subscribe(
      (data)=>{
          console.log(data);
          console.log(this.userid+" success");
      },
      () =>{
        console.log("problem in enroll-course component");
      }
    )
  }
}
