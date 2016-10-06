package com.jetthunder2.launch.repository;

import com.jetthunder2.launch.representation.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogRepository extends MongoRepository<Blog, Integer> {

}
