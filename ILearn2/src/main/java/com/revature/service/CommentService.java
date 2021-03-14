package com.revature.service;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Comment;
import com.revature.model.Lesson;
import com.revature.model.User;
import com.revature.repository.CommentRepository;

@Service(value = "commentService")
public class CommentService {
	
	private CommentRepository commentRepository;
	
	@Autowired
	public void setCommentRepository(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}
	
	public Comment findById(int id) {
		return this.commentRepository.findByCommentid(id);
	}
	
	public List<Comment> findByLesson(Lesson lesson) {
		return this.commentRepository.findByLesson(lesson);
	}
	
	public List<Comment> findByAuthorAndLesson(User author, Lesson lesson) {
		return this.commentRepository.findByAuthorAndLesson(author, lesson);
	}
	
//	public List<Comment> findByComment_date(Timestamp date) {
//		return this.commentRepository.findByComment_date(date);
//	}
	
	public List<Comment> findByAuthor(User author) {
		return this.commentRepository.findByAuthor(author);
	}
	
//	public Comment findByAuthorAndComment_dateAndLesson(User author, Timestamp date, Lesson lesson) {
//		return this.commentRepository.findByAuthorAndComment_dateAndLesson(author, date, lesson);
//	}
	
	public void createComment(Comment comment) {
		this.commentRepository.save(comment);
	}
	
	public void updateComment(Comment comment) {
		if(this.commentRepository.existsByCommentid(comment.getCommentid()) == false) {
			this.commentRepository.save(comment);
		}
	}
	
	public void deleteComment(Comment comment) {
		this.commentRepository.delete(comment);
	}

}