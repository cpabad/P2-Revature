import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LoginComponent } from './components/login/login.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {
    path: "create-lesson",
    component: CreateLessonComponent
  },
  {
    path: "login",
    component: LoginComponent

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
