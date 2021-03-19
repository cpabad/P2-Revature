import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LoginComponent } from './components/login/login.component';
import { CourseComponent } from './components/course/course.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',component: HomepageComponent
  },

  {
    path: "create-lesson",
    component: CreateLessonComponent
  },
  {
    path: "login",
    component: LoginComponent

},
  {
    path: 'logout', component:LogoutComponent
  },
  {
    path: 'profile', component:ProfileComponent
  },
  {
    path:"course",
    component: CourseComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
