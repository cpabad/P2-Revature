package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Course;
import com.revature.repository.CourseRepository;


/**
 * This is the service layer class for the Course that we will use to provide logic operate on 
 * the data sent to and from the repository and the client.
 * @author kenny Huang
 *
 */

@Service(value = "courseService")
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	
	public void addCourse(Course course) {
		
		this.courseRepository.save(course);
		
	}
	
	public void updateCourse(Course course) {
		
		this.courseRepository.save(course);
	}
	
	public void deleteCourse(Course course) {
		
		this.courseRepository.delete(course);
	}
	
	public Course getCourseById(Integer id) {
		
		return this.courseRepository.findByCourseid(id);
	}
	
	public List<Course> getAllCourses(){
		
		return this.courseRepository.findAll();
	}

}
