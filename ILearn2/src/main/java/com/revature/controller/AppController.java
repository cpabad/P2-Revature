package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
@CrossOrigin(origins = {"http://localhost:4200"})
public class AppController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping(path = "/login")
	public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password, HttpServletRequest request){
		if(this.userService.login(email, password)) {
			HttpSession session = request.getSession();
			session.setAttribute("user", this.userService.getUserByEmail(email));
			return ResponseEntity.status(HttpStatus.OK).body("Successufully login! ");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect email or password!");
	}
	
	@PostMapping(path = "/logout")
	public ResponseEntity<String> logout(HttpServletRequest request) {
		if(request.getSession(false) != null) {
			request.getSession(false).invalidate();
			return ResponseEntity.status(HttpStatus.OK).body("Successufully logout! ");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No user logged in!");
		}
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
	
	@GetMapping(path = "/allCoursesByCreator")
	public List<Course> getAllCoursesByCreator(@RequestParam int userid){
		
		return this.courseService.getAllByCreator(userid);
		
	}
	
}
