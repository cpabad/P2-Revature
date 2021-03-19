import { Course } from "./course";

export class Lesson {
    lessonid:number;
    title:String;
    course:Course
    file_location:String

    constructor(lessonid:number, title:String, course:Course, file_location:String){
        this.lessonid = lessonid;
        this.title = title;
        this.course = course;
        this.file_location = file_location;
    }
}