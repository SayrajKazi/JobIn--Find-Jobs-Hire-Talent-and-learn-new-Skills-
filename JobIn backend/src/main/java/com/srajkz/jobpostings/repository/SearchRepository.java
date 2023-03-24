package com.srajkz.jobpostings.repository;

import com.srajkz.jobpostings.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}
