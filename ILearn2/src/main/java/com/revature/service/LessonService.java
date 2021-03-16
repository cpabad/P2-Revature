package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Lesson;
import com.revature.repository.LessonRepository;

@Service(value = "lessonService")
public class LessonService {
	
	@Autowired
	private LessonRepository lessonRepository;
	
	public void addLesson(Lesson lesson) {
		this.lessonRepository.save(lesson);
	}
	
	public void updateLesson(Lesson lesson) {
		this.lessonRepository.save(lesson);
	}
	
	public void deleteLesson(Lesson lesson) {
		this.lessonRepository.delete(lesson);
	}

	public Lesson getLessonById(Integer id) {
		return this.lessonRepository.findByLessonid(id);
	}
	
	public List<Lesson> getAllLessons(){
		return this.lessonRepository.findAll();
	}
}
