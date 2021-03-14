package com.revature.repository;

import java.util.List;

import com.revature.model.Course;
import com.revature.model.Lesson;

/**
 * 
 * @author Jason Arias
 *
 */

public interface LessonRepository {

	public void createLesson(Lesson lesson);
	public void updateLesson(Lesson lesson);
	public void deleteLesson(Lesson lesson);
	public List<Lesson> getLessonByCourseId(int courseid);
	public List<Lesson> getLessonByLessonId(int lessonid);
	public List<Lesson> getLessonByTitle(String title);
}
