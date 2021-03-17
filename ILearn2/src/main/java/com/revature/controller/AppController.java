package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Course;
import com.revature.model.User;
import com.revature.service.CourseService;
import com.revature.service.UserService;

@RestController(value = "appController")
@RequestMapping(path = "/iLearn")
@CrossOrigin()
public class AppController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CourseService courseService;
	
	
	@PostMapping(path = "/login")
	public String login(@RequestParam String email, @RequestParam String password){
		if(this.userService.login(email, password)) {
			
			return "Successufully login! ";
		}
		return "Incorrect email or password!";
	}
	
	@GetMapping(path = "/allUsers")
	public List<User> getAllUsers(){
		return this.userService.getAllUsers();
	}
	
	@GetMapping(path = "/getUserById")
	public User getUserById(int id) {
		return this.userService.getUserById(id);
	}
	
	@PostMapping(path = "/addUser", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void addUser(@RequestBody User user) {
		
		if(!(user.getEmail().equals("") || user.getUser_password().equals("") || user.getFirst_name().equals("")||user.getLast_name().equals(""))) {
			this.userService.addUser(user);
		}
		
	}
	
	@PostMapping(path = "/updateUser",consumes = {MediaType.APPLICATION_JSON_VALUE})
	public String updateUser(@RequestBody User user) {
		
		User existedUser = this.userService.getUserById(user.getUserid());
		if(existedUser != null) {
		this.userService.updateUser(user);
		return "Updated successfully";
		}else {
			return "No such user exist";
		}
	}
	
	@PostMapping(path = "/enrollCourse")
	public String enrollCourse(@RequestParam int userid, @RequestParam int courseid) {
		
		if(this.userService.enrollCourse(userid, courseid)) {
			return "Successfully enrolled a course!";
		}
		return "This course is not available!";
	}
	
	@GetMapping(path = "/allCourses")
	public List<Course> getAllCourse(){
		return this.courseService.getAllCourses();
	}
	
	
}
