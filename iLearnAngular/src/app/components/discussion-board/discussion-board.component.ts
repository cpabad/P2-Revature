import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import {Comment} from 'src/app/models/Comment'
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {

  email:String = sessionStorage.getItem('email')
  user:User = new User(0,"","","","",[])
  comment:Comment = new Comment(0,this.user,'',new Date(),0,0)
  text: String = "Type your comment..."
  constructor(private userService:UserService, private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.getloggedInUser(this.email)
  }


  getloggedInUser(email:String){
    this.userService.getUser(email).subscribe(
      (data) =>{
        this.user = data
      },
      () => {
        console.log("Something went wrong")
      }
    )
  }

  makeComment(){
    this.comment.author = this.user
    this.commentService.makeComment(this.comment).subscribe(
      (data) =>{
        console.log(data)
        window.location.reload();
      },
      ()=>{
        console.log('Errorrrrr!')
      }
    )
  }


}
