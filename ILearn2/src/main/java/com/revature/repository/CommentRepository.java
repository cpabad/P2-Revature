package com.revature.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Comment;
import com.revature.model.Lesson;
import com.revature.model.User;

@Repository(value = "commentRepository")
public interface CommentRepository extends JpaRepository<Comment, Integer> {
	
	Comment findByCommentid(int id);
	List<Comment> findByLesson(Lesson lesson);
	List<Comment> findByAuthorAndLesson(User author, Lesson lesson);
//	List<Comment> findByComment_date(Timestamp date);
	List<Comment> findByAuthor(User author);
//	Comment findByAuthorAndComment_dateAndLesson(User author, Timestamp date, Lesson lesson);
	<S extends Comment> S save(Comment comment);
	boolean existsByCommentid(int id);

}