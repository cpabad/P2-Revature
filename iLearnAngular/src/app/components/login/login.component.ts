import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addActiveContainer(){
    document.getElementById('container').classList.add("right-panel-active");
  }
  
  removeActiveContainer(){
    document.getElementById('container').classList.remove("right-panel-active");
  }
  

}







