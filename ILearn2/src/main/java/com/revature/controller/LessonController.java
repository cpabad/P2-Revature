package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Lesson;
import com.revature.service.LessonService;

@RestController("lessonController")
@RequestMapping(path = "/lesson")
public class LessonController {

	private LessonService lessonService;
	
	@Autowired
	public void setLessonService(LessonService lessonService) {
		this.lessonService = lessonService;
	}
	
	@GetMapping(path = "/view-lesson-by-id", produces = {MediaType.APPLICATION_JSON_VALUE})
	public Lesson findById(@RequestParam int id) {
		return this.lessonService.getLessonById(id);
	}
	
	@PostMapping(path = "/new", produces = {MediaType.APPLICATION_JSON_VALUE})
	public void createLesson(@RequestBody Lesson lesson) {
		this.lessonService.addLesson(lesson);
	}
	
	@PostMapping(path = "/delete", produces = {MediaType.APPLICATION_JSON_VALUE})
	public void deleteLesson(@RequestBody Lesson lesson) {
		this.lessonService.deleteLesson(lesson);
	}
	
	@PostMapping(path = "/update", produces = {MediaType.APPLICATION_JSON_VALUE})
	public void updateLesson(@RequestBody Lesson lesson) {
		this.lessonService.updateLesson(lesson);
	}
	
}
