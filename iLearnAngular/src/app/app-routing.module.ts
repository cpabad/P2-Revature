import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "create-lesson",
    component: CreateLessonComponent
  },
  {
    path: "login",
    component: LoginComponent
=======
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {
    path:"course",
    component: CourseComponent
>>>>>>> 8d08b9e922a1a55e346362816d7b13c7a2cd6f8f
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
