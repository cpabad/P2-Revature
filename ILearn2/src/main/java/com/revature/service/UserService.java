package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Course;
import com.revature.model.User;
import com.revature.repository.UserRepository;



/**
 * This is the service layer class for User that we will use to provide logic operate on 
 * the data sent to and from the repository and the client.
 * @author kenny Huang
 *
 */
@Service(value = "userService")
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CourseService courseSevice;
	
	public void addUser(User user) {
		
		this.userRepository.save(user);
	}
	
	public void updateUser(User user) {
		
		this.userRepository.save(user);
		
	}
	
	public void deleteUser(User user) {
		
		this.userRepository.delete(user);
		
	}
	
	public User getUserById(int id) {
		
		return this.userRepository.findByUserid(id);
	}
	
	public User getUserByEmail(String email) {
		return this.userRepository.findByEmail(email);
	}
	
	public List<User> getAllUsers(){
		
		return this.userRepository.findAll();
		
	}
	
	public boolean enrollCourse(int userid, int courseid) {
		
		User user = getUserById(userid);
		Course course = this.courseSevice.getCourseById(courseid);
		
		if (user != null && course !=null) {
			
			user.getEnrolled_courses().add(course);
			course.setNumber_enrolled(course.getNumber_enrolled()+1);
			updateUser(user);
			this.courseSevice.updateCourse(course);
			return true;
		}else {
			return false;
		}
	}
	
	public boolean login(String email, String password){
		
		User user = this.getUserByEmail(email);
		if(user != null && user.getUser_password().equals(password)) {
			return true;
		}else {
			return false;
		}
	}

}
