package com.srajkz.jobpostings.repository;

import com.srajkz.jobpostings.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {




}
