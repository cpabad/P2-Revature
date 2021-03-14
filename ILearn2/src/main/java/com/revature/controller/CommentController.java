package com.revature.controller;

import java.sql.Timestamp;
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

import com.revature.model.Comment;
import com.revature.model.Lesson;
import com.revature.model.User;
import com.revature.service.CommentService;

@RestController("commentController")
@RequestMapping(path = "/comment")
@CrossOrigin
public class CommentController {
	
	private CommentService commentService;
	
	@Autowired
	public void setCommentService(CommentService commentService) {
		this.commentService = commentService;
	}
	
	@GetMapping(path = "/view-comment-by-id", produces = {MediaType.APPLICATION_JSON_VALUE})
	public Comment findById(@RequestParam int id) {
		return this.commentService.findById(id);
	}
	
	@GetMapping(path = "/view-comment-by-lesson", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Comment> findByLesson(@RequestParam Lesson lesson) {
		return this.commentService.findByLesson(lesson);
	}
	
	@GetMapping(path = "/view-comment-by-author-lesson", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Comment> findByAuthorAndLesson(@RequestParam User author, @RequestParam Lesson lesson) {
		return this.commentService.findByAuthorAndLesson(author, lesson);
	}
	
	@GetMapping(path = "/view-comment-by-date", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Comment> findByDate(@RequestParam Timestamp date) {
		return this.commentService.findByComment_date(date);
	}
	
	@GetMapping(path = "/view-comment-by-author", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Comment> findByAuthor(@RequestParam User author) {
		return this.commentService.findByAuthor(author);
	}
	
	@GetMapping(path = "/view-comment-by-author-date-lesson", produces = {MediaType.APPLICATION_JSON_VALUE})
	public Comment findByAuthorDateLesson(@RequestParam User author, @RequestParam Timestamp date, @RequestParam Lesson lesson) {
		return this.commentService.findByAuthorAndComment_dateAndLesson(author, date, lesson);
	}
	
	@PostMapping(path = "/new", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void createComment(@RequestBody Comment comment) {
		this.commentService.createComment(comment);
	}
	
	@PostMapping(path = "/update", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void updateComment(@RequestBody Comment comment) {
		this.commentService.updateComment(comment);
	}
	
	@PostMapping(path = "/delete", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void deleteComment(@RequestBody Comment comment) {
		this.commentService.deleteComment(comment);
	}

}