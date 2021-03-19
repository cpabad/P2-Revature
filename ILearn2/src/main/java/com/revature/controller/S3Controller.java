package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.revature.service.S3Service;

@RestController("s3controller")
@RequestMapping(path = "/s3")
public class S3Controller {
	
	@Autowired
	private Environment env;
	
	@Autowired
	private S3Service s3Service;
	
	@GetMapping("/view")
	public void viewS3() {
		System.out.println("bucketName = " + env.getProperty("amazon.bucketName"));
	}
	
	@PostMapping("/new")
	public String uploadFile(@RequestPart(value = "file") MultipartFile file) {
		return this.s3Service.uploadFile(file);
	}
	
	@PostMapping("/delete")
	public String deleteFile(@RequestPart String url) {
		return this.s3Service.deleteFile(url);
	}

}
