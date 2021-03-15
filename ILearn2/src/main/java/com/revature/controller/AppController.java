package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.User;
import com.revature.service.UserService;

@RestController(value = "appController")
@RequestMapping(path = "/iLearn")
@CrossOrigin()
public class AppController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path = "/all")
	public List<User> getAllUsers(){
		return this.userService.getAllUsers();
	}
}
