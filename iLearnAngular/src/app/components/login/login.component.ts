/**
 * 
 * @author kenny Huang
 *
 */

import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  email:String;
  password:String;
  newUser:User = new User(0,"","","","",[]);

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.newUser).subscribe(
      (data) =>{
        console.log(data)
      },
      ()=>{
        console.log('Errorrrrr!')
      }
    )
  }

  login(){
    this.userService.login(this.email,this.password).subscribe(
      (data) =>{
        console.log(data)
      },
      ()=>{
        console.log('Errorrrrr!')
      }
    )
  }

  addActiveContainer(){
    document.getElementById('container').classList.add("right-panel-active");
  }
  
  removeActiveContainer(){
    document.getElementById('container').classList.remove("right-panel-active");
  }
  

}







